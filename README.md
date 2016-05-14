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


## TODO:

- how to make `aspell` to memorize ignored words across sesions?
- implement excerpt feature http://www.seanbuscay.com/blog/jekyll-teaser-pager-and-read-more/
- some kind of app/script/editor extension which will highlight, gather all TODOs, because I'm embedding them in posts
- `jekyll post NAME` opens `vim`, switch to other editor
- social: twitter, hacker news, redit
- https://github.com/juusaw/amp-jekyll
- domain, https with cloudflare
