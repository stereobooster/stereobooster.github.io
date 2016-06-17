---
layout: post
title: Responsive big bold text
tags:
  - typography
  - Houdini
---

There are existing solutions for creating responsive big bold text. Most reliable so far are JS based.

### JS

- [big-ideas-text](https://github.com/kennethormandy/big-ideas-text). **No jQuery!**
- [fitText](https://github.com/davatron5000/FitText.js/blob/master/jquery.fittext.js) (32 sloc). Use this plugin on your fluid or responsive layout to achieve scalable headlines that fill the width of a parent element.
- [TextTailor](https://github.com/jpntex/TextTailor.js/blob/master/jquery.texttailor.js) (165 sloc). Responsive text to fill the height of the parent element or ellipse it when it doesn't fit.
- [slabText](https://github.com/freqdec/slabText/blob/master/js/jquery.slabtext.js) (207 sloc). jQuery plugin for producing big, bold & responsive headlines. Implementation of [slabtype alogorithm](http://erikloyer.com/index.php/blog/the_slabtype_algorithm_part_2_initial_calculations/)
- [BigText](https://github.com/zachleat/BigText/blob/master/src/bigtext.js) (248 sloc). jQuery plugin, calculates the font-size and word-spacing needed to match a line of text to a specific width.
- [hatchshow.js](https://gist.github.com/unabridgedxcrpt/4490619). jQuery plugin

If you take a look in source code, you will notice it is not complicated code. But all of them depend on jQuery. So it will introduce [~50kb](https://mathiasbynens.be/demo/jquery-size) of JS dependency for such simple functionality. Possible solution of this problem:

- use lighter jQuery alternative
- implement same functionality without jQuery dependency
- implement using [Houdini](https://www.smashingmagazine.com/2016/03/houdini-maybe-the-most-exciting-development-in-css-youve-never-heard-of/) (when it will be ready)



### SVG

There is [SVG only implementation](http://dabblet.com/gist/5231222) of functionality similar to `fitText`. And [JS plugin](https://github.com/jxnblk/fitter-happier-text/blob/master/index.js) which make use of this SVG trick.

Other notes on SVG text fitting:

- [Fitting Text Into a Box](http://tavmjong.free.fr/SVG/TEXT_IN_A_BOX/index.html)
- [TextFitting with D3](http://bl.ocks.org/milkbread/6571949)
- [A library for manipulating text on SVG.](https://github.com/palantir/svg-typewriter)

### CSS

There is a [solution](http://codepen.io/CrocoDillon/details/jgmwt/) to make text to fit to viewport, but not to fit container. See also [this discussion on stackoverflow](http://stackoverflow.com/questions/16056591/font-scaling-based-on-width-of-container).

### [Line breaking algorithm](https://en.wikipedia.org/wiki/Line_wrap_and_word_wrap)

Line breaking, also known as word wrapping or paragraph formation, is the problem of dividing a text into a sequence of lines so that every line spans at most some fixed width.

- [TeX line breaking algorithm in JavaScript](https://github.com/bramstein/typeset)
- [Line breaking](http://xxyxyz.org/line-breaking/)
- [A JS implementation of the Unicode Line Breaking Algorithm (UAX #14)](https://github.com/devongovett/linebreak)

### [Hyphenation algorithm](https://en.wikipedia.org/wiki/Hyphenation_algorithm)
A hyphenation algorithm is a set of rules (especially one codified for implementation in a computer program) that decides at which points a word can be broken over two lines with a hyphen. For example, a hyphenation algorithm might decide that impeachment can be broken as impeach-ment or im-peachment, but not, say, as impe-achment.

- [Franklin M. Liangs hyphenation algorithm (LaTeX and OpenOffice) in JavaScript](https://github.com/mnater/Hyphenator)
- [Soft hyphen](https://en.wikipedia.org/wiki/Soft_hyphen)
- [Non-breaking space](https://en.wikipedia.org/wiki/Non-breaking_space)
- [`<nobr>`](https://developer.mozilla.org/en/docs/Web/HTML/Element/nobr)
- [CSS Hyphenation](http://caniuse.com/#feat=css-hyphens)

### Usage

Titles, quotes, pull-quotes.

<div class="row">
  <div class="columns medium-4 large-4">
    <img src="/assets/posts/responsive-big-bold-text/slab-text-1.jpg">
    <a href="https://www.pinterest.com/pin/232005818281664518/">source</a>
    <br>
    <img src="/assets/posts/responsive-big-bold-text/on_typography_by_jamesrandom.jpg">
    <a href="http://jamesrandom.deviantart.com/art/On-Typography-216046992">source</a>
  </div>
  <div class="columns medium-4 large-4">
    <img src="/assets/posts/responsive-big-bold-text/big-title-2.jpg">
    <a href="https://www.pinterest.com/pin/552816922986031381/">source</a>
    <br>
    <img src="/assets/posts/responsive-big-bold-text/slab-text-3.jpg">
    <a href="https://www.flickr.com/photos/bizweekdesign/7047760095/in/photostream/lightbox/">source</a>
  </div>
  <div class="columns medium-4 large-4">
    <img src="/assets/posts/responsive-big-bold-text/big-title-1.jpg">
    <a href="https://www.behance.net/gallery/Breviario-Magazine-Editorial-Design/6279463">source</a>
    <br>
    <img src="/assets/posts/responsive-big-bold-text/big-title-3.jpg">
    <a href="https://www.pinterest.com/pin/446489750529687395/">source</a>
    <br>
    <img src="/assets/posts/responsive-big-bold-text/pull-quote.jpg">
    <a href="https://www.pinterest.com/pin/337418197064042411/
    ">source</a>
    <br>
    <img src="/assets/posts/responsive-big-bold-text/oil.jpg">
    <a href="http://womenofgraphicdesign.org/post/135131259372/nadia-m%C3%A9ndez-mexico-layouts-for-bloomberg">source</a>
  </div>
</div>
