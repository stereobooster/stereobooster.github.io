---
layout: post
title: Unix philosophy
---

<blockquote class="attention-grabber small">
    <p>This is the Unix philosophy: <strong>Write programs that do one thing and do it well. Write programs to work together. Write programs to handle</strong> text streams, because that is a <strong>universal interface.</strong></p>
    <footer>
        <cite><a href="http://www.catb.org/esr/writings/taoup/html/ch01s06.html">Richard M. Stallman. The GNU Manifesto.</a></cite>
    </footer>
</blockquote>


This principle can be applied for software development in general, not just applications for Unix, but for frameworks, libraries, components. I would rephrase it:

- **Write components that do one thing and do it well.**
- **Write components to work together.**
- **Write components that communicate using most universal interface.**

It reminds me of [composition over inheritance principle](/composition-over-inheritance).

## Ecosystem
This approach leads to creation of standalone components which in turn form ecosystem.

Ecosystem with big number of components have problems: workforce dispersion, difficulty of choice, bad discoverability. Those problems often happens with components trying to do too much. And "do one thing" rule should decrease those problems.

<div class="row">
  <div class="columns medium-4 large-4">
    <p><img src="/assets/posts/unix-philosophy/pisa-tower.png" alt=""></p>
    <h3>Workforce dispersion</h3>
    <p>The more component trying to do the more chance there will be components with overlapping functionality. It leads to dispersion of workforce of open-source contributors. So it means different people implementing same thing again and again, porting functionality from one library to another. Instead they could spend time improving one project or many small projects without overlapping functionality.</p>
  </div>
  <div class="columns medium-4 large-4">
    <div class=flex-video>
      <iframe src="//giphy.com/embed/W1UPMUpL2vHfG" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    </div>
    <h3>Difficulty of choice</h3>
    <p>Myriad of posts with title "Top N things compared" shows how much time people spend choosing "best" solution.</p>
  </div>
  <div class="columns medium-4 large-4">
    <p><img src="/assets/posts/unix-philosophy/doors.png" alt=""></p>
    <h3>Bad discoverability</h3>
    <p>The bigger number of components in system means it is harder to discover proper solution for given problem. Search can give irrelevant results in first place.</p>
  </div>
</div>

## Improved ecosystem

### Catalog and package manager

Centralized list of available components. Good practice is to make it mirrorable. Centralized Catalog pairs good with package manager. Examples: [homebrew](http://brew.sh/), [npmjs](https://www.npmjs.com/), [rubygems](https://rubygems.org/), [nix](https://nixos.org/nix/).

### Blacklist

Blacklist prevents duplication and violators of "do one thing" rule. Good example is [gulps blacklist](https://github.com/gulpjs/plugins/blob/master/src/blackList.json).

### Leader board

All components divided in subcategories. Components can be ordered by some kind of rank. Most often it is rank which is not always the best way to do choice, but this at least can serve as start point. This makes decision and discovery easier. Good example: [ruby toolbox](https://www.ruby-toolbox.com/).

### Awesome list

Curated lists of awesomeness as a way to expose best practices of ecosystem. Example: [awesome-gulp](https://github.com/alferov/awesome-gulp)

### Standards & Conventions

Gulp has pretty limited domain: it do stuff with files. This allowed to standardize output and input of components. It uses stream of virtual files.

## Universal interfaces

The broader domain of problems components try to solve, more universal interface should be. In case of Unix programs most universal would be text stream, in case of frameworks it would be basic data structures, like dictionaries or lists. But universal interface leads to poor portability components: **you can not just throw things in and expect it to work together you will need to write adapters.**

## Real world examples of Unix philosophy

One of the best examples of Unix philosophy applied is [gulp](http://gulpjs.com/). Gulp is Unix philosophy plus functional programming, [ideal match](http://okmij.org/ftp/Computation/monadic-shell.html).

1. It is consists of small plugins.
2. Each plugin doing only one thing.
3. Communication between plugins based on streams of [virtual files](https://github.com/gulpjs/vinyl) (not text streams though).

## On frameworks

> Using a framework is typically a joyful experience in the beginning, as you’re using common functionality to implement common features. Problems arise when you start to diverge from framework’s conventions and there’s no custom configuration that can help you. This is the moment when you need to look at low-level tools, and if they don’t exist, you’ll be on your own.
>
>That’s why it’s so **important to have a framework that consists of loosely coupled components**, where each component is a standalone system on its own. The more assumptions a framework makes about your application architecture, the bigger the risk of hitting a wall in the long term.
>
> &mdash; [Piotr Solnica](http://solnic.eu/2016/05/30/abstractions-and-the-role-of-a-framework.html)

### P.S. Libraries vs Frameworks

<div class="row">
  <div class="columns medium-6 large-6">
    <blockquote>
    <p>Inversion of Control is a key part of what makes a framework different to a library. <strong>A library is essentially a set of functions that you can call</strong>, these days usually organized into classes. Each call does some work and returns control to the client.</p>

    <p>A framework embodies some abstract design, with more behavior built in. In order to use it you need to insert your behavior into various places in the framework either by subclassing or by plugging in your own classes. <strong>The framework&#39;s code then calls your code</strong> at these points.</p>

    <p>&mdash; <a href="http://martinfowler.com/bliki/InversionOfControl.html">Martin Fowler</a></p>
    </blockquote>
  </div>
  <div class="columns medium-6 large-6">
    <p><img src="/assets/posts/unix-philosophy/framework-vs-library.png" alt=""></p>
    <a href="http://www.programcreek.com/2011/09/what-is-the-difference-between-a-java-library-and-a-framework/">Image source</a>
  </div>
</div>
