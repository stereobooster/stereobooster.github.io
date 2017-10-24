---
layout: post
title: Joel Test For Programming Language
---

It is like [The Joel Test](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/), but for evaluating programming languages. It is easy to get a quick yes or no to each question.



## Package manager

Best known to me example of the package manager is Bundler (Ruby). I'm, as a Ruby programmer, hasn't realized how good it is. I embraced it when I switched to another programming language. The good package manager should have lock file, with which it is possible to recreate dependencies deterministically.

Example of not so good package manager is npm. I do not want to offend creators of npm, but let's face it has some flaws. Recently a lot of them were fixed, but before the situation was pretty sad. Some tickets stayed open for years. Known problems:
- painfully slow - it was very slow in version 3
- does not have proper lock files - it is resolved in version 5, not sure how good it is
- very big dependency folder [meme about weight]
- does not cache libraries in a shared storage - probably resolved in version 5

It was so painful that community gathered and wrote another package manager from scratch: yarn. Yarn does not have.

There is also bower, which is deprecated in favor of npm.

Another story on how things can go wrong is Golang. Read [The Saga of Go Dependency Management](https://blog.gopheracademy.com/advent-2016/saga-go-dependency-management/) for details. Basically what happened is if you do not provide good tooling community starts to build their own solution, but if there is no centralized organization you will end up with gazillion solutions and a fragmented community.

But now they have [dep](https://github.com/golang/dep), let's hope it will work.

## Autoformatter

Why bother to format code when the computer can do this for you? Examples of good autoformatters are

- [gofmt](https://golang.org/cmd/gofmt/) from Golang
- [prettier](https://github.com/prettier/prettier) from JavaScript

Examples of not so good approach are linters for code style. They can check code, but not fix it. Usually, they become an annoying step in CI build. Even more confusing when those tools don't only check code style, like presence on semicolon in the end of statement or length of a line, but also detect code smells. Examples: JShint, JSlint, ESlint, rubocop.

If there is no one centralized code style, [people start wasting their time to figure out what is the best way to format code](https://github.com/twbs/bootstrap/issues/3057). Also, they produce ["standards", which are not standards](https://github.com/standard/standard/issues/78). As a result, you get fragmented community. In some sense, `prettier` failed here a bit by providing choice with the flags and eslint config - please use pretties without configurations.

Another flaw when style rules are not about code readability. Example: autopep8 and pep8ify vs https://github.com/google/yapf.

## Awesome list

A typical question from a newbie: what to use for X. Where X can be HTTP request, HTTP server, stream implementation, exotic data structure, ORM or anything else. What are the current best practices?

A good example comes from Ruby world, again. There is [ruby-toolbox](https://www.ruby-toolbox.com/). It is not so glorious right now (after the incident), but believe me, [it was](https://web.archive.org/web/20170430093635/https://www.ruby-toolbox.com/).

In the lack of proper tool, the community starts to do [collection of links](https://github.com/sindresorhus/awesome), like before search engines were invented and [links were organized by volunteers into directories](http://www.dmoz.org/).

## Version switcher

Typically you need to deal with more than one version of a language, but POSIX systems assume only one executable with the given name should exist at a time. So you need to be able to switch versions, even more, source code should be able to specify which version of PL it expects. And in case you miss required version tool should be able to download and build it, without the need to live console or IDE.

Good examples: [rbenv](https://github.com/rbenv/rbenv), [rustup](https://github.com/rust-lang-nursery/rustup.rs)

## Error messages

This is not tooling, but rather feature of the compiler. Trendsetter here is [elm](http://elm-lang.org/blog/compiler-errors-for-humans). I wonder it took so long to understand that we all deserve better errors.

If you google "worst|unreadable compiler errors" most of the articles will be about C++. But I bet there are some unreadable errors in Haskell and OCaml too.

## Static type checker, linter

Some languages are by default have static types, but if it is dynamically typed language it doesn't mean we can not have static type checking.

Good examples of static type checkers for dynamic languages are Facebook Flow, TypeScript, Diamondback Ruby.

Sometimes linters used instead of type checkers, but this is not the same thing.

Examples of linters: JSLint, JSHint, ESLint, shellcheck, csslint, [gixy](https://github.com/yandex/gixy)

## Programming language explainer

Sometimes for newbies, it is hard to understand some "idiomatic",  cryptic code. And they need to ask a question in StackOverflow - what X means in Y. Instead, it is possible to craft tool, which will translate from programming language to plain English.

Examples: [explainshell](https://explainshell.com), [showthedocs](http://showthedocs.com/), [explain ruby](https://github.com/txus/explain)

## Debugging tools

This is tricky. Any imperative language can have step by step debugger. Even if there is no a dedicated tool you always can use a more general tool like GDB or strace (you can debug anything if you use von Neumann architecture machine).

It is much nicer to have dedicated debug tools instead of common. For example, rtrace instead of strace.

Even if I say that it is possible to debug anything, sometimes there is big lack of tools. I remember those dark times when I used alert to debug JS in the browser. Later Firebug appeared. It was such relief. And now we have chrome debug protocol and source maps, so you can debug JS anywhere: in iOS, in NodeJS, inside WebView.

On the other hand, there is always a problem with debugging tools for declarative languages. For example SQL, Ansible playbooks, CSS.

SQL has the best "debugging" tool compared to other. It is "explain". [A good example is PostgreSQL](http://tatiyants.com/postgres-query-plan-visualization/).

I want to cry when I need to debug CSS. I'm not alone here:
- <https://twitter.com/thomasfuchs/status/493790680397803521>
- Mhttps://twitter.com/chriscoyier/status/919798232179511296>

A possible solution is to use CSS-in-JS and add type checker. Other projects trying to help debug CSS:
- [pesticide](http://pesticide.io/)
- [csstriggers](https://csstriggers.com/)

## Idiomatic style

Not a tool, but a part of the culture around language.

Good example: Idiomatic Ruby
Bad example: [haskell](https://www.willamette.edu/~fruehr/haskell/evolution.html), it is not just style, but the fact that Haskell compiler is extensible.

## Standard library

Not a tool, but a part of the language:

Bad examples: [OCaml std lib is so bad, that it was replaced by other company](https://github.com/janestreet/core). [GO is example number two](https://twitter.com/garybernhardt/status/905945308202287104)

Good example: I suppose Rust

Sometimes lack of good std lib can be replaced by good third party libraries. A typical example here is Ruby. Built-in Ruby network library is obscure, but there are 2 popular gems which are used everywhere, so they kind of standard.
