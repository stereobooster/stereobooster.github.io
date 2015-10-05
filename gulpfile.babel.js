import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';
import path from 'path';
import fs from 'fs';

import yaml from 'js-yaml';


const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', () => {
  return gulp.src('css/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.', '_sass/']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['last 1 version']}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('_site/css'))
    .pipe(reload({stream: true}));
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
      .pipe(reload({stream: true, once: true}))
      .pipe($.eslint(options))
      .pipe($.eslint.format())
      .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}

const lintOptions = {
  env: {
    jquery: true,
  },
  global: {
    google: true,
    addresses: true,
  },
  rules: {
    "comma-dangle": [1, "always-multiline"],
    "no-unused-vars": 1,
  }
};

const testLintOptions = {
  env: {
    mocha: true
  }
};

function applyTemplate(templateFile) {
  var tpl = swig.compileFile(path.join(__dirname, templateFile));

  return through.obj(function (file, enc, cb) {
    var data = {
        site: site,
        page: file.page,
        content: file.contents.toString()
    };
    file.contents = new Buffer(tpl(data), 'utf8');
    this.push(file);
    cb();
  });
}

gulp.task('lint', lint('js/**/*.js', lintOptions));

var configYaml = {};

gulp.task('config_yml', function (cb) {
  try {
    configYaml = yaml.safeLoad(fs.readFileSync('_config.yml', 'utf-8'));
    cb();
  } catch (e) {
    cb(e);
  }
});

gulp.task('posts:md', ['config_yml'], function () {
  return gulp.src('_posts/*.md')
    .pipe($.frontMatter({property: 'page', remove: true}))
    .pipe($.data(function(file) {
       var basename = path.basename(file.relative);
       var m = basename.match(/(\d{4}-\d{2}-\d{2})-(.+)\.md/);
       if (m) {
        file.page.date = file.page.date || m[1];
        file.page.title = file.page.title || m[2].split('-').join(' ');
       }
       return {
        page: file.page,
        site: configYaml
       };
     }))
    .pipe($.marked())
    .pipe($.rename(function (path) {
      // TODO use configYaml.permalink
      path.dirname += '/' + path.basename;
      path.basename = 'index';
      path.extname = '.html'
    }))
    .pipe(gulp.dest('_site'));
});

function html() {
  // gulp dust?
  return gulp.src('app/*.html')
    .pipe($.data(function(file) {
      var meta = {
        date: moment().format('DD.MM.YY HH:mm:ss'),
        version: '0.1',
      };
      var addresses = [];
      var fileName = path.basename(file.path);
      var data = {};
      if (fileName == 'index.html') {
        data = JSON.parse(fs.readFileSync('./data/' + fileName + '.json', 'utf8'));
        var id = 1;
        var addressid = 1;
        for (var i = 0, li = data.places.length; i < li; i++) {
          var place = data.places[i];
          data.places[i].id = id;
          for (var j = 0, lj = place.addresses.length; j < lj; j++) {
            data.places[i].addresses[j].id = addressid;
            data.places[i].addresses[j].company_name = data.places[i].addresses[j].name || place.name;
            data.places[i].addresses[j].company_id = id;
            addresses.push(data.places[i].addresses[j]);
            addressid++;
          }
          id++;
        }
      }
      data.addresses = addresses;
      data.meta = meta;
      return data;
    }))
    .pipe($.swig({defaults: { cache: false} }))
    .on('error', function (err) {
      console.log(err);
    });
}

gulp.task('html:build', () => {
  html()
    .pipe(gulp.dest('.tmp'))
    .pipe(reload({stream: true}))
})

gulp.task('html', ['styles'], () => {
  const assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});

  return html()
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('img/**/*')
    .pipe($.if($.if.isFile, $.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
    .on('error', function (err) {
      console.log(err);
      this.end();
    })))
    .pipe(gulp.dest('_site/img'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')({
    filter: '**/*.{eot,svg,ttf,woff,woff2}'
  }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', () => {
  return gulp.src([
    'app/*.*',
    'app/*/verifyforzoho.html',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['html:build', 'styles', 'fonts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('data/*.json', ['html:build']);
  gulp.watch('app/*.html', ['html:build']);

  gulp.watch([
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  // 'wiredep',
  gulp.watch('bower.json', ['fonts']);
});

gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', () => {
  browserSync({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('test/spec/**/*.js').on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});

// requires ~/.aws/credentials
const publisher = $.awspublish.create({
  'params': {
    'Bucket': ''
  },
  'region': 'eu-central-1',
});

const headers = {
  'Cache-Control': 'max-age=315360000, no-transform, public'
};

// 'apple-touch-icon.png',
const shortCahce = [
  'favicon.ico',
  'index.html',
  'robots.txt',
];

gulp.task('deploy', ['build'], function () {
  var revAll = new $.revAll({
    dontRenameFile: shortCahce.map((name) => {
      return new RegExp('/' + name, 'g');
    })
  });

  var shortCahceFilter = $.filter(shortCahce, {restore: true});
  var longCahceFilter = $.filter(['**/*'].concat(shortCahce.map( (v) => { return '!*' + v; })), {restore: true});

  return gulp.src('dist/**/*.*')
    .pipe(revAll.revision())
    .pipe($.awspublish.gzip({ ext: '' }))
    .pipe(shortCahceFilter)
    .pipe(publisher.publish())
    .pipe(shortCahceFilter.restore)
    .pipe(longCahceFilter)
    .pipe(publisher.publish(headers))
    .pipe(longCahceFilter.restore)
    .pipe(publisher.sync())
    .pipe(publisher.cache())
    .pipe($.awspublish.reporter());
});
