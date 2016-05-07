---
layout: post
title: from jekyll to gulp
---

Stream-based pure functional Jekyll

Generate static site based on documents (markdown file with frontmatter or json or dot or anything else) aplying transformation function (map/reduce).

Be able to use different transformations to different type of files.

Treat collection of files as stream (like gulp).

In case of file change, stream will produce new event. It will be possible to do incremental genration.

If transformations will be pure functions. It will be possible to do hot-reloading. Like in redux. In this terminology jekyll layouts are transformation-functions. So when you change layout/template it will need hot-reload module and rerun all effected documents from the stream.

It will be possible to hook Browser-sync like redux. Even more: suppose you changed layout (and your server in development mode), so it needs to regenerate all posts. But actually you don't have to regenrate them all, you need only to regenerat current page loaded in the browser and trigger browser to reload. Think of it as functionall laziness.






 - [Gulp + Jekyll](https://github.com/sondr3/generator-jekyllized)
 - [NodeJS Jekyll alternative](https://github.com/fortes/enfield)
 - NodeJS liquid templates: [1](https://github.com/sirlantis/liquid-node), [2](https://github.com/leizongmin/tinyliquid/wiki)
 - Use gulp instead of Jekyll: [1](http://www.rioki.org/2014/06/09/jekyll-to-gulp.html), [2](http://www.rioki.org/2014/12/02/overhaul-of-page-generation.html), [3](http://blog.crushingpennies.com/a-static-site-generator-with-gulp-proseio-and-travis-ci.html)

## Idea

> Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server.

No DB. Filesystem as storage and git for versioning. Frontmatter makes kind of "document" (as in document-oriented DB).
So Jekyll transforms "documents" to web pages. Every document contains at least raw text formatted with markup and potentially more structured data. You can think of it like function:

```
jekyll(document) -> web page
# other examples
graphviz(dot document) -> raster image/vector image
d3js(web page) -> web page with graphs
```

So you can transform documents to more than one variation of web page. Simplest change would be based on different templates/layouts and to custom processors which will convert structured data to some kind graph or other visual represntation as in data-driven-documents.

Also: see post for Markdown.

Well good start. But if we go for static site it would be nice to be able to optimize it. Gulp is perfect for the job of frontend optimization. See post for jekyll.

If you have static site and you want something more next step would be [Progressive Web Apps](https://developers.google.com/web/progressive-web-app) or similar ideas https://staticapps.org/, https://unhosted.org/, http://nobackend.org/.solutions.html



## Other links

https://www.staticgen.com/
https://ghost.org/download/
http://prose.io/
https://hexo.io/docs/migration.html
https://github.com/chrisjlee/hexo-theme-zurb-foundation/blob/master/gulpfile.js

https://github.com/zurb/panini


https://www.npmjs.com/package/noflo-jekyll


http://raneto.com/

