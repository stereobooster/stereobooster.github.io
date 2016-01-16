---
layout: post
title: ruby code quality
---

https://github.com/github/scientist
http://martinfowler.com/bliki/FeatureToggle.html
http://zachholman.com/talk/move-fast-break-nothing/
http://githubengineering.com/move-fast/


https://infinum.co/the-capsized-eight/articles/best-ruby-on-rails-refactoring-talks
https://github.com/nslocum/design-patterns-in-ruby
http://best-ruby.com/index.html
https://github.com/apotonick/trailblazer
http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/
https://github.com/metricfu/metric_fu
https://infinum.co/the-capsized-eight/articles/top-8-tools-for-ruby-on-rails-code-optimization-and-cleanup

### Code styling
 - [RuboCop](https://github.com/bbatsov/rubocop) is a Ruby static code analyzer. Out of the box it will enforce many of the guidelines outlined in the community Ruby Style Guide.

### Code quality
 - [Rails Best Practice](https://github.com/railsbp/rails_best_practices) is a code metric tool to check the quality of rails codes.
 - [Metric Fu](https://github.com/metricfu/metric_fu) - A fist full of code metrics
 - [reek](https://github.com/troessner/reek)


https://github.com/schneems/derailed_benchmarks

https://github.com/metricfu/metric_fu/wiki/Code-Tools
https://github.com/codeclimate/codeclimate
https://github.com/whitesmith/rubycritic

```
begin
  require 'protected_attributes'
rescue LoadError
  # In case `ProtectedAttributes` gem is not available.
end
```
