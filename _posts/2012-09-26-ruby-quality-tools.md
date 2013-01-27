---
layout: post
title: Ruby quality tools
description: Ruby test quality, code quality, performance tools. Quality is not an act, it is a habit © Aristotle.
keyword: ruby, test, quality, code, performance, tools
tags:
breadcrumbs:
  name: "100% (Q) quality"
---

<br><br><br>

## Github Tools
 - [travis-ci](http://travis-ci.org/)
 - [codeclimate](https://codeclimate.com/github/signup)
 - [gemnasium](https://gemnasium.com/)

## Test Quality Tools
 - [heckle](https://github.com/seattlerb/heckle)
 - [Rcov](https://github.com/relevance/rcov)
 - [simplecov](https://github.com/colszowka/simplecov)

## Code Quality Tools
### [metric_fu](https://github.com/jscruggs/metric_fu)
Metric_fu is a set of rake tasks that make it easy to generate metrics reports. It uses [Saikuro](http://saikuro.rubyforge.org/), [Flog](https://github.com/seattlerb/flog), [Flay](https://github.com/seattlerb/flay), [Rcov](https://github.com/relevance/rcov), [Reek](https://github.com/troessner/reek), [Roodi](https://github.com/martinjandrews/roodi), [Churn](https://github.com/danmayer/churn), [RailsBestPractices](https://github.com/railsbp/rails_best_practices), Subversion, Git, and Rails built-in stats task to create a series of reports. It's designed to integrate easily with [CruiseControl.rb](https://github.com/thoughtworks/cruisecontrol.rb) by placing files in the Custom Build Artifacts folder.

### [pelusa](https://github.com/codegram/pelusa)
Pelusa is a static analysis tool and framework to inspect your code style and notify you about possible red flags or missing best practices. Pelusa **needs Rubinius to run**, due to how easy it is to work with a Ruby AST with it, but it doesn't mean that your Ruby code must run on Rubinius.

### [laser](https://github.com/michaeledgar/laser)
Static analysis and style linter for Ruby code.

### [cane](https://github.com/square/cane)

## Performance Tools
### [ruby-prof](https://github.com/rdp/ruby-prof)
ruby-prof is a fast code profiler for Ruby. ruby-prof requires Ruby 1.8.7 or 1.9.2 and higher. Windows prebuilt binary gem is available.

### [perftools.rb](https://github.com/tmm1/perftools.rb)
gperftools for ruby code. Advantages over ruby-prof: perftools samples your process using setitimer() so it can be used in production with minimal overhead.

### [rbtrace](https://github.com/tmm1/rbtrace): like strace, but for ruby code
rbtrace shows you method calls happening inside another ruby process in real time. rbtrace works on ruby 1.8 and 1.9, running on linux or mac osx.

 - [rblineprof](https://github.com/tmm1/rblineprof)
 - [PLine](https://github.com/soba1104/PLine)
 - [Benchmark module](http://ruby-doc.org/stdlib-1.9.3/libdoc/benchmark/rdoc/index.html)

## Non-ruby specific tools
 - [Note](http://blog.flavorjon.es/2009/06/easily-valgrind-gdb-your-ruby-c.html) on how to use [gdb](http://www.gnu.org/software/gdb/) and [valgrind](http://valgrind.org/) with ruby
 - http://stackoverflow.com/questions/413477/is-there-a-good-valgrind-substitute-for-windows

## Resources
 - https://www.ruby-toolbox.com/categories/code_metrics
 - http://stackoverflow.com/questions/286564/can-anyone-recommend-a-ruby-source-code-analyzer-something-like-pylint
 - http://devver.wordpress.com/2008/10/03/ruby-tools-roundup/
