---
layout: post
title: Spell, Grammar, Style Checkers. Proofreading software
---

# What do I want

- Spell, grammar, style checker.
- Typography checker. With auto-correct option.
- Command line tool with color support.
- Command line tool with interactive mode. It will ask you what to do on every error. And it will be possible to add words to ignore list.
- Command line tool that able to generate report. And exit with error (non zero) code, so it will be possible to detect failure status in command line.
- With per folder/project settings: to ignore words, to ignore style rules, to set default language.
- Ability to integrate with editors using general interface or protocol like [sublime linters](http://www.sublimelinter.com/en/latest/) do.
- Support of markdown

I want basically something like [mdast-lint](https://github.com/wooorm/mdast-lint) or [eslint](http://eslint.org/docs/user-guide/command-line-interface) or [rubocop](https://github.com/bbatsov/rubocop), but for natural language.

# What exists out there (open source)

**TODO**: implement automated comparison test.

## LanguageTool

[LanguageTool](https://languagetool.org/) is an Open Source proof­reading program for English, French, German, Polish, and more than 20 other languages.

Written in **Java**. Has plugins: LibreOffice, OpenOffice, Firefox, Chrome. Has command line version. Can be integrated into other programs. Has online version.

Possible to install with 'homebrew'.

## After The Deadline

[After The Deadline](http://open.afterthedeadline.com/) is an intelligent language checking server, made to scale. Open source, available as online service and [command line tool](https://github.com/lpenz/atdtool). Written in **Java**.

Possible to install with 'homebrew'

## Retext

[retext](https://github.com/wooorm/retext) is an extensible natural language processor with support for multiple languages. Retext provides a pluggable system for analyzing and manipulating natural language in JavaScript. Node and the browser. 100% coverage.

> Rather than being a do-all library for Natural Language Processing (such as
> [NLTK](http://www.nltk.org) or [OpenNLP](https://opennlp.apache.org)),
> **retext** aims to be useful for more practical use cases (such as checking
> for [insensitive words](https://github.com/wooorm/alex) or decoding
> [emoticons](https://github.com/wooorm/retext-emoji)) instead of more academic
> goals (research purposes).
> **retext** is inherently modular—it uses plugins (similar to
> [mdast](https://github.com/wooorm/mdast/) for markdown) instead of providing
> everything out of the box (such as
> [Natural](https://github.com/NaturalNode/natural)). This makes **retext** a
> viable tool for use on the web.

Written in **JavaScript**. Has command line interface.

## Alex

[Alex](http://alexjs.com/) Catch insensitive, inconsiderate writing.
Whether your own or someone else’s writing, alex helps you find gender favouring, polarising, race related, religion inconsiderate, or other unequal phrasing.

Written in **JavaScript**.

# Online services (proprietary)

## Gitbook

[Gitbook editor](https://www.gitbook.com/editor) provides proofreading functionality

## Glavred

[Glavred](https://glvrd.ru/) - style checker for **Russian** texts. Good for advertisements, news, articles, sites, instructions, letters and commercial offers. Bad for poetry, literature.

## typograf

[typograf](http://www.typograf.ru/) - typography checker for **Russian** texts.

See also [comparison of typography checkers](http://www.typograf.ru/flog/)

## hemingway

[hemingway](http://www.hemingwayapp.com/)

## grammarly

[grammarly](https://www.grammarly.com)

## Other online services

Online services which doesn't seems to be very promising:

- http://editminion.com/
- http://www.gingersoftware.com/grammarcheck
- http://spellcheckplus.com/
- http://www.reverso.net/spell-checker/english-spelling-grammar/
- https://www.autocrit.com/
- http://www.grammarbase.com/

# Publications

- http://academicguides.waldenu.edu/writingcenter/publication
- http://www.danielnaber.de/languagetool/download/style_and_grammar_checker.pdf
- http://aclweb.org/anthology/W/W10/W10-0404.pdf
- https://www.artlebedev.ru/everything/izdal/spravochnik-izdatelya-i-avtora-2014/
- http://www.chompchomp.com/

# Syntax highlighting

https://github.com/mortenjust/cleartext-mac
http://www.mrspeaker.net/dev/syntx/
http://evanhahn.github.io/English-text-highlighting/
https://news.ycombinator.com/item?id=11294026
https://english.edward.io/
http://swizec.com/blog/i-wish-this-existed/swizec/4045
https://github.com/inderpreetsingh/Lord-Byron
