---
layout: post
title: Ruby decorators
tags:
  - rails
  - ruby
---

Good overview of decorator options for ruby listed in [thoughtbot article](https://robots.thoughtbot.com/evaluating-alternative-decorator-implementations-in)

The simplest implementation is:

```ruby
class Decorator < SimpleDelegator
  def self.wrap(collection)
    collection.map do |obj|
      new obj
    end
  end

  # to mimic draper
  # Be aware that draper does some magic to implement it,
  # so this will not work exactly the same as draper
  # https://github.com/drapergem/draper/blob/master/lib/draper/view_context.rb
  def h
    ActionController::Base.helpers
  end
end

class WorkerDecorator < Decorator
end
```

See also [this article](https://bibwild.wordpress.com/2012/12/19/the-simplest-rails-decorator-implementation-that-just-might-work/).

## Draper

Draper is [de facto choice for Rails projects](https://www.ruby-toolbox.com/categories/rails_presenters). But be aware that there are some issues with it:

 - [#742](https://github.com/drapergem/draper/issues/742)
 - [#661](https://github.com/drapergem/draper/issues/661)

## [Cells](https://github.com/apotonick/cells)

Cells is part of [trailblazer](http://trailblazer.to/) project, which tries to bring "a high-level architecture for web applications".
