---
layout: post
title: Framework as set of loosely coupled components
---

> Using a framework is typically a joyful experience in the beginning, as you’re using common functionality to implement common features. Problems arise when you start to diverge from framework’s conventions and there’s no custom configuration that can help you. This is the moment when you need to look at low-level tools, and if they don’t exist, you’ll be on your own.
>
>That’s why it’s so **important to have a framework that consists of loosely coupled components**, where each component is a standalone system on its own. The more assumptions a framework makes about your application architecture, the bigger the risk of hitting a wall in the long term.
>
> &mdash; [Piotr Solnica](http://solnic.eu/2016/05/30/abstractions-and-the-role-of-a-framework.html)

This is reminds me:
> This is the Unix philosophy: **Write programs that do one thing and do it well. Write programs to work together**. Write programs to handle text streams, because that is a universal interface.
>
>[Richard M. Stallman. The GNU Manifesto.](http://www.catb.org/esr/writings/taoup/html/ch01s06.html)
