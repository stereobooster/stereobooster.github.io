---
layout: post
title: Dreaming about js templates
---

Lets imagine how ideal js templating engine can be. Will make check list.

 - Isomorphic: support both client and server
 - Optimize client perfomance: it is possible to precompile on server
 - No nasty white spaces in precompiled templates. Side note: ejs `<% %>` tags do not work that well with html minifiers
 - Optimize server perfomance: support fragment caching
 - Optimize browser rendering: virtual DOM tree and value-diffing strategy. As React and Glimmer do
 - Safety: escape all output by default
 - Extensibility: easy to implement helpers, filters
 - Easy to write if expressions, without need for special helpers
 - Layout inheritance
 - Support partials (not in global namespace)
 - Async
 - Informative compilation errors. Maybe Source Maps

### Existing solutions

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

### Comparisions

 - https://strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/
 - https://garann.github.io/template-chooser/
