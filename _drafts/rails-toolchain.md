---
layout: post
title: rails toolchain
---


 - First of all checkout [ruby-toolbox](https://www.ruby-toolbox.com/) also can check [awesome rails gem](https://github.com/hothero/awesome-rails-gem)
 - Try to strat new project with [suspenders](https://github.com/thoughtbot/suspenders). Especially check [Gemfile](https://github.com/thoughtbot/suspenders/blob/master/templates/Gemfile.erb)

### Even more for pry

- [jazz_hands](https://github.com/nixme/jazz_hands)

```ruby
group :development do
  gem 'pry-nav'
  gem 'pry-stack_explorer'
  gem 'pry-theme'
end
```

### Even more for Capybara

```ruby
group :development, :test do
  gem 'capybara-screenshot'
end
```

### Development
 - [rails_panel](https://github.com/dejan/rails_panel)

```ruby
group :development do
  gem 'meta_request'
end
```

 - [letter_opener](https://github.com/ryanb/letter_opener) - Preview email in the default browser instead of sending it. This means you do not need to set up email delivery in your development environment, and you no longer need to worry about accidentally sending a test email to someone else's address.

### Code styling
 - [RuboCop](https://github.com/bbatsov/rubocop) is a Ruby static code analyzer. Out of the box it will enforce many of the guidelines outlined in the community Ruby Style Guide.

### Code quality
 - [Rails Best Practice](https://github.com/railsbp/rails_best_practices) is a code metric tool to check the quality of rails codes.
 - [Metric Fu](https://github.com/metricfu/metric_fu) - A fist full of code metrics
 - [reek](https://github.com/troessner/reek)

### Security
 - [brakeman](https://github.com/presidentbeef/brakeman) is a static analysis tool which checks Ruby on Rails applications for security vulnerabilities.
 - [bundler-audit](https://github.com/rubysec/bundler-audit) is a patch-level verification tool for Bundler which checks for vulnerable versions of gems and insecure gem sources.

Gemfile:

```ruby
group :development, :test do
  gem 'bundler-audit', require: false
  gem 'brakeman', require: false
end
```

circle.yml:

```yaml
test:
  override:
    - rake test
  post:
    - rake assets:precompile
    - bundle exec bundle-audit update
    - bundle exec bundle-audit check
    - bundle exec brakeman --exit-on-warn
```

### Production
 - [Slowpoke](https://github.com/ankane/slowpoke) - Rack::Timeout is great. Slowpoke makes it better.
 - [Rack Attack](https://github.com/kickstarter/rack-attack) - Rack middleware to blocking & throttling.

### Deployment
 - [Capistrano](https://github.com/capistrano/capistrano) - Remote multi-server automation tool.

### Parallel tests
 - [parallel_tests](https://github.com/grosser/parallel_tests)
 - http://www.railsonmaui.com/blog/2014/09/09/fast-tests-comparing-zeus-with-spring-on-rails-4-dot-1/
 - http://jacubeit.com/2013/08/31/rails-4-bdd-setup/

### Continious testing

```ruby
group :development, :test do
  gem 'guard-rspec'
  gem 'rb-fsevent' if `uname` =~ /Darwin/
  gem 'guard-livereload'
  gem 'rack-livereload'
  gem 'terminal-notifier-guard'
end
```

TODO: https://github.com/sevos/zeus-parallel_tests

### Benchmarking and profiling

 - https://github.com/schneems/derailed_benchmarks


### Frontend tooling

TODO: Use pure frontend tools based on gulp, webpack, redux, PostCSS, BrowserSync, node, bower etc.

 - https://github.com/shakacode/react-webpack-rails-tutorial
 - http://yeoman.io/generators/


