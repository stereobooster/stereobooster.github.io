---
layout: post
title: Story behind strong_arguments
tags:
  - ruby
---

**TL;DR** Describing typical problems with ruby function arguments. How I solved them with a gem. What other options are.

## Ruby syntax

### keyword arguments

Ruby 2.0 introduced first-class support for keyword arguments:

```ruby
def foo(bar: 'default')
  puts bar
end

foo # => 'default'
foo(bar: 'baz') # => 'baz'
```


In Ruby 1.9, we could do something similar using a single `Hash` parameter:

```ruby
def foo(options = {})
  bar = options.fetch(:bar, 'default')
  puts bar
end

foo # => 'default'
foo(bar: 'baz') # => 'baz'
```

Ruby 2.1 introduced required keyword arguments, which are defined with a trailing colon:

```ruby
def foo(bar:)
  puts bar
end

foo # => ArgumentError: missing keyword: bar
foo(bar: 'baz') # => 'baz'

foo(bar: 'baz', baz: 'baz') # => ArgumentError: unknown keyword: baz
```

Optional named arguments

```ruby
def foo(bar:, baz: nil)
  puts bar, baz
end

foo(bar: 'baz', baz: 'baz') # => 'baz' 'baz'

def foo(bar:, **args)
  puts bar, args.fetch(:baz)
end

foo(bar: 'baz', baz: 'baz', other: 'other') # => 'baz' 'baz'
```

### No way to distinguish between `nil` and no value

Assume we have method similar to ActiveRecords' `where`, so it can accept different parameters to filter results.

```ruby
def where(name: nil)
  if name.nil?
    # filter
  else
    # all results
  end
end

where() # all records

bar = 'baz'
where(name: bar) # only records with name == 'baz'

bar = nil
where(name: bar) # expect records with name == nil, but instead it will give all records
```

**Solution:**

```ruby
def where(options = {})
  if options.key?(:name)
    # filter
  else
    # all results
  end
end

# Ruby 2.0 syntax
def where(**options)
  options = options || {}

  if options.key?(:name)
    # filter
  else
    # all results
  end
end
```

### No way to check allowed parameters to prevent typos

Take a look at code from previous section at different angle

```ruby
def where(name: nil)
end

where(nane: nil) # ArgumentError: unknown keyword: nane

def where(options = {})
end

where(nane: nil) # expect ArgumentError, but instead it will give all records
```

**Solution:**

```ruby
def where(options = {})
  allowed_arguments = [:name]
  extra_arguments = options.keys - allowed_arguments
  raise ArgumentError.new("unknown keyword: #{extra_arguments[0]}") if extra_arguments.length > 0

  if options.key?(:name)
    # filter
  else
    # all results
  end
end

where(nane: nil) # ArgumentError: unknown keyword: nane
```

### No way to do only one optional parameter

Assume you have really broad database of products. It includes products with different types of [SKU](https://en.wikipedia.org/wiki/Stock_keeping_unit) numbers. There is no sense to search by more than one identifier: `where(upc: '123', ean: '456')`

**Solution:**

```ruby
def where(options = {})
  raise ArgumentError.new("One and only one keyword required") if options.length != 1
  allowed_arguments = [:upc, :ean, :isbn]
  extra_arguments = options.keys - allowed_arguments
  raise ArgumentError.new("unknown keyword: #{extra_arguments[0]}") if extra_arguments.length > 0

  if options.key?(:upc)
    # filter
  else
    # all results
  end
end
```

Some code snippets taken from [thoughtbout article](https://robots.thoughtbot.com/ruby-2-keyword-arguments).

## Gem

I extracted all those snippets into [strong_arguments](https://github.com/stereobooster/strong_arguments) gem and added some DSL inspired by [strong_parameters](https://github.com/rails/strong_parameters). Work in progress though.

### Usage

```ruby
require 'strong_arguments'

def where(options = {})
  arguments = StrongArguments.new(options)
    .optional(:name, :age)

  if argument.name_present?
    argument.name
  elsif argument.age_present?
    argument.age
  end
end
```

**Notice:** work in progress. Examples below may not work.

### Types

It is possible to add type checking in manner of [stronger_parameters](https://github.com/zendesk/stronger_parameters).

```ruby
def where(options = {})
  arguments = StrongArguments.new(options)
    .optional(name: StrongArguments.string, age: StrongArguments.integer)
end
```

### Defaults

It is possible to add defaults. Example of how it can look like

```ruby
def where(options = {})
  arguments = StrongArguments.new(options)
    .optional(name: StrongArguments.string.default('Joe'), age: StrongArguments.integer.default(10))
end
```

## Other view to the problem: method signatures DSL

### sig

[sig](https://github.com/janlelis/sig) adds the `sig` method that allows you to add signatures to Ruby methods.

```ruby
sig [:to_i, :to_i], Integer
def sum(a, b)
  a.to_i + b.to_i
end

sum(42, false) # Sig::ArgumentTypeError: Expected false to respond to :to_i
```

This solution introduce **gradual** and [**structural type system**](https://en.wikipedia.org/wiki/Structural_type_system).

See also:

- [Gradual Type Checking for Ruby](http://blog.codeclimate.com/blog/2014/05/06/gradual-type-checking-for-ruby/)
- [Gradual Typing Bibliography](http://samth.github.io/gradual-typing-bib/)
- [An open letter to Matz on Ruby type systems](https://tonyarcieri.com/an-open-letter-to-matz-on-ruby-type-systems)

### Rubype

[Rubype](https://github.com/gogotanaka/Rubype) brings you advantage of type without changing existing code's behavior.

```ruby
require 'rubype'

class MyClass
  def sum(x, y)
    x + y
  end
  typesig :sum, [Numeric, Numeric] => Numeric
end

MyClass.new.sum(1, 'string') # Rubype::ArgumentTypeError: for MyClass#sum's 2nd argument
```

### RTC

[Rtc](https://github.com/plum-umd/rtc) Ruby Type Checker

## Looking into the future

### Static type checker

> Interestingly, Matz suggested that this kind of system would initially be implemented as a static analyzer, and that it would require new restrictions on some common Ruby methods, such as require and methods_missing, in order to support a type-checked universe. It isn’t totally clear what those restrictions would need to be, but it’s a fun thought experiment.
>
> &mdash; [Matz at RubyConf 2014: Will Ruby 3.0 Be Statically Typed?](http://www.omniref.com/blog/2014/11/17/matz-at-rubyconf-2014-will-ruby-3-dot-0-be-statically-typed/)

Ruby static type analyzer can be implemented the same way as [flow](https://github.com/facebook/flow) for JavaScript.

See also:

 - [issue 9999](https://bugs.ruby-lang.org/issues/9999)
 - https://codon.com/consider-static-typing
 - https://www.cs.umd.edu/projects/PL/druby/papers/druby-oops09.pdf
 - https://blog.abevoelker.com/sick-of-ruby-dynamic-typing-side-effects-object-oriented-programming/

### Auto-generated documentation

Method signatures will allow to automatically generate documentation for methods

```ruby
desc 'Sums two values'
sig [:to_i, :to_i], Integer
def sum(a, b)
  a.to_i + b.to_i
end
```

Similar thing expressed in [YARD](http://yardoc.org/)

```ruby
# Sums two values
#
# @param a [Integer] first value
# @param b [Integer] second value
# @return [Integer]
```

Or mixed with [YARD](http://yardoc.org/)

```ruby
# Sums two values
#
# @author Loren Segal
# @deprecated Use `+` instead
sig [:to_i, :to_i], Integer
def sum(a, b)
  a.to_i + b.to_i
end
```

### Enforced semantic visioning

Idea comes from [elm](https://github.com/elm-lang/elm-package). See also: [semantic versioning](http://semver.org/).

![](/assets/posts/story-behind-strong-arguments/elm.png)

