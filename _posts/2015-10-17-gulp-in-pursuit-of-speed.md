---
layout: post
title: Gulp in pursuit of speed
tags:
  - tools
  - gulp
---

### Minify JS, CSS, HTML

{% highlight javascript linenos %}
gulp.task('html', () => {
  const assets = $.useref.assets({searchPath: ['.tmp', 'app', '.']});

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
    .pipe(gulp.dest('dist'));
});
{% endhighlight %}

[css-minification-benchmark](http://goalsmashers.github.io/css-minification-benchmark/)


### Optimize images, SVGs

**TODO**: try [imageoptim](https://www.npmjs.com/package/gulp-imageoptim), because it [rocks](https://jamiemason.github.io/ImageOptim-CLI/). [svgmin](https://github.com/ben-eb/gulp-svgmin) for SVGs. Generate webp [gulp-webp](https://github.com/sindresorhus/gulp-webp)

{% highlight javascript linenos %}
gulp.task('images', () => {
  return gulp.src('app/images/**/*')
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
    .pipe(gulp.dest('dist/images'));
});
{% endhighlight %}

### CDN, infinite cache, assets revisions, gzip

{% highlight javascript linenos %}
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

const shortCahce = [
  'favicon.ico',
  '*.html',
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
{% endhighlight %}

### Inline CSS required for above the fold content

{% highlight javascript linenos %}
//add smoosher before minifyHtml
.pipe($.smoosher({ base: 'dist' }))
.pipe($.if('*.html', $.minifyHtml({conditionals: true, loose: true})))
{% endhighlight %}

### Remove unused CSS

{% highlight javascript linenos %}
//add uncss before minifyCss
.pipe($.if('*.css', $.uncss({
  html: ['dist/**/*.html'],
  ignore: [],
})))
.pipe($.if('*.css', $.minifyCss({compatibility: '*'})))
{% endhighlight %}

### Custom jQuery and sass/js frameworks builds

Do not include them all. Choose only what you need.

 - [jquery-builder](http://projects.jga.me/jquery-builder/)

## Not Gulp

### Async JS loading

### Custom build of font for icons

See [master icon fonts]({% post_url 2015-10-17-master-icon-fonts %}). [gulp-iconfont](https://www.npmjs.com/package/gulp-iconfont)

