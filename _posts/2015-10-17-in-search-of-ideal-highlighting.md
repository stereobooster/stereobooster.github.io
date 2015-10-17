---
layout: post
title: In search of ideal highlighting
---

I was looking the best way to post code snippets in my Jekyll blog (this one which you read). Haven't found it yet. But have some thoughts on what it should look like.

### GFM fenced code blocks (or happy three backticks)

GFM fenced code block looks much more elegant then liqiud highlight tag.

    ```language
    ```

vs

```liquid
{{ "{%" }} highlight language linenos %}
{{ "{%" }} endhighlight %}
```

To enable GFM with pygments support in jekyll on github:

```yaml
markdown: redcarpet
redcarpet:
  extensions: ['tables', 'autolink', 'strikethrough', 'space_after_headers', 'with_toc_data', 'fenced_code_blocks']

highlighter: pygments
```

The problem is that it does not show line numbers. **TODO**: [file issue](https://github.com/vmg/redcarpet/issues)

### Line numbers
Line numbers are helpfull.

```liquid
{{ "{%" }} highlight language linenos %}
{{ "{%" }} endhighlight %}
```

But they should not get copied when you copy code.

```scss
.highlight {
  .lineno {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
}
```

### Word wrap

Remove word wrap and add horizontal scroll.

```scss
.highlight {
  code {
    word-wrap: normal;
  }
  pre {
    overflow-x: auto;
    white-space: pre;
  }
}
```

### Line numbers and horizontal scroll

I want line numbers to be fixed, so when you scroll they do not hide. Something like [this](http://zurb.com/playground/projects/responsive-tables/index.html). Still didn't find pure CSS solution.

### Themes

Add some twist with [good theme](https://github.com/richleland/pygments-css)

