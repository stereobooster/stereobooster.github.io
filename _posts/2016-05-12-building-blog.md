---
layout: post
title: Building blog
---

## Motivation

I want to build, let's call it a blog. Something that I can use as notebook, knowledge-base, snippets store, share platform. Other purposes of this blog are: [train writing skills](/proofreading-software) and use it as CV.


**TODO**: create CV page and/or portfolio page

I'm using Evernote for personal notes, but it is quickly becomes messy-and-hard-to-find-something. So I decide that I need something (technique or attitude, rather than soft) to organize knowledge, make it easy to find something.

## Workflow

Haven't decide yet. Will get back to this subject after some time using current setup as is.

## Tools

### Jekyll

I like ideas of Jekyll: all posts, notes, pages (all sort of documents) stored as markdown files on a disk. I can use my favorite text editor for editing, git for versioning. I like idea of free-form documents, because of front-matter you can attach any additional properties to the document. You can use different layout for each document, which allows to craft unique pages, in contrast to standard blog ware.

## Theme

Text is just part of blog. Appropriate visual appearance is required. No one wants to read something that looks like [GeoCities](https://en.wikipedia.org/wiki/Yahoo!_GeoCities). I'm in process of building theme.

### Grid

I have had nice experience with [Foundation](http://foundation.zurb.com/). I want to use its sass modules (grid, visibility, typography). I do not want to use JavaScript, because of its heavy weight.

I searched for `Jekyll + Foundation` starter kit ([1](https://github.com/huphtur/jekyll-foundation-zurb-template), [2](https://www.chrisanthropic.com/blog/2014/integrating-the-foundation-zurb-grid-with-jekyll/)). But decided that I can simply install it through bower and copy required sass files.

### Typography

Web typography itself deserves [blog post](/web-typography). I want to use vertical rhythm for start.

### Elements, Examples

Sometimes I come across beautiful blogs or good UI/UX solutions. I want to collect them in separate page. And reuse them as needed. **TODO**: create page

## Sharing and integration

There is `jekyll-seo-tag` which should solve this problem. **TODO**: test how it works. Idea about automatically generating picture for post. Check how `ghost` solve this problem.

## Technical stuff

### Loading speed and optimization

I want site to be super-fast. It is simple static site, there are no reasons for it to be slow. I'm thinking about utilizing different techniques to make really fast. I do not know yet what I will choose, but here are examples, to name few:

- https://www.ampproject.org/how-it-works/
- https://github.com/addyosmani/critical
- gulp and its beautiful collection of plugins. There was post on gulp in my previous version of blog. **TODO**: restore it.
- minifiers for: JS, CSS, HTML, images, fonts, SVGs

### Tracking

Google analytic easiest choice.

### CDN, HTTPS

Cloudflare. **TODO**: setup account for it

### Hosting

As of now I'm using github pages and git for deployment. Other option would be Amazon S3 and script for deployment.

