# My blog

This is my personal blog

## workflow

1. start server `jekyll l`
1. `jekyll draft NAME` TODO: should open text editor automatically
1. TODO: setup text editor, so it would exclude `.bundle`, `.sass-cache`, `node_modules`, `_sites` from search
1. check spelling, lint markdown

```
proselint file/path.md
aspell check file/path.md

languagetool -l en-US file/path.md
atdtool file/path.md

mdast -u mdast-lint file/path.md
bundle exec mdl file/path.md

```

1. `jekyll publish _drafts/NAME.md` TODO: should accept NAME


## POSTS

- Do I use word "ecology" right? http://blog.oup.com/2012/05/its-ecology-not-environmental-science/
- stereobooster logo
- typography awseome list (golden ratio - column - glvrd poster)
- https://www.youtube.com/watch?v=u9M3pKsrcc8#t=636
- reformat http://c2.com/cgi/wiki?ProgrammingParadigm (xray, es6)
- http://www.martinfowler.com/bliki/WhatIsaBliki.html
- meme generator
- https://www.youtube.com/watch?v=6oxTMUTOz0w + map of wars and causes
- http://www.goodreads.com/quotes/681-the-future-is-already-here-it-s-just-not-evenly
http://quoteinvestigator.com/2012/01/24/future-has-arrived/
- autoformat markdown to columns
- inspiring ideas: RoR (CoC), Elm (Hard to Do errors, Semantic versioning forced, readable error messages, compilation minifies requirements of tests), Lisp (zero syntax, map/reduce, flat map?), Ruby (DSL, no properties, everything is function), SmallTalk (Everything is an object, comunicate via messages), Haskell (monad), erlang (Actors, immutable variables, pattern matching),
http://exploringdata.github.io/vis/programming-languages-influence-network/
http://c2.com/cgi/wiki?ProgrammingParadigm

## TODO:
- Add smart tags {{ site.data.tags[tag].icon }}, add [fa-icons](http://fontawesome.io/get-started/), add links for tags
- http://blog.typekit.com/2012/08/02/source-sans-pro/
- how to make `aspell` to memorize ignored words across sesions?
- implement excerpt feature http://www.seanbuscay.com/blog/jekyll-teaser-pager-and-read-more/
- some kind of app/script/editor extension which will highlight, gather all TODOs, because I'm embedding them in posts
- `jekyll post NAME` opens `vim`, switch to other editor
- social: twitter, hacker news, redit
- add "edit this page" link
- https://github.com/juusaw/amp-jekyll
- domain, https with cloudflare
- use http2 push or inline critical css in heder https://mademistakes.com/articles/using-jekyll-2016/
