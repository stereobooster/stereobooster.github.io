---
layout: post
title: Dreaming about js templates
---

Lets imagine how ideal js templating engine can be. Will make check list.

 - Isomorphic: support both client and server
 - Optimize client performance: it is possible to precompile on server
 - No nasty white spaces in precompiled templates. Side note: ejs `<% %>` tags do not work that well with HTML minifiers
 - Optimize server performance: support fragment caching
 - Optimize browser rendering: virtual DOM tree and value-diffing strategy. As React and Glimmer do
 - Safety: escape all output by default
 - Extensibility: easy to implement helpers, filters
 - Easy to write if expressions, without need for special helpers
 - Layout inheritance
 - Support partials (not in global namespace)
 - Async
 - Informative compilation errors. Maybe Source Maps
 - Async Fragments technique [see](http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/)

### Existing solutions

 - https://github.com/marko-js/marko
 - https://facebook.github.io/jsx/
 - https://github.com/tj/consolidate.js
 - http://www.dustjs.com/
 - http://ectjs.com/
 - http://mozilla.github.io/nunjucks/
 - https://github.com/janl/mustache.js
 - http://handlebarsjs.com/
 - https://github.com/tildeio/htmlbars
 - http://www.embeddedjs.com/
 - http://jade-lang.com/
 - http://underscorejs.org/#template

### Comparisons

 - https://strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/
 - https://garann.github.io/template-chooser/
