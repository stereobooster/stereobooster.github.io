---
layout: post
title: Optimizing Rails
---

## Track problem

Use some kind of monitoring solution to track server perfomance. You can choose from something more general, like Nagios, NewRlic or Stackdriver, to something specifilly tailored for Rails like Skylight or Scout.

## Narrow down source of a problem

### N+1 problem

[Easy to fix](/rails-fighting-n-plus-1-query-problem) when you know you have one. Use Skylight or [Bullet](https://github.com/flyerhzm/bullet) to detect it. You also can discover it from [rack-mini-profiler](https://github.com/MiniProfiler/rack-mini-profiler) or [RailsPanel](https://github.com/dejan/rails_panel).

### Slow queries

Use the index, Luke. Use Skylight or DBs slow queries log to detect a problem.


### Generally slow

Use profiler to detect why is your application is slow. Use [stackprof](https://github.com/tmm1/stackprof) in `:wall` mode or [rack-mini-profiler](https://github.com/MiniProfiler/rack-mini-profiler) with `?pp=flamegraph`.

**stackprof**

```ruby
require 'stackprof'
require File.expand_path('../../config/environment',  __FILE__)
exit unless Rails.env.development?
sp = (ENV['STACKPROF'] || :wall).to_sym
StackProf.start(mode: sp, raw: true)
# code which we want to test
StackProf.stop
StackProf.results(File.join(Dir.pwd, "tmp/stackprof-#{sp}.dump"))
```

```bash
stackprof tmp/stackprof-wall.dump --text
```

**rack-mini-profiler**


```ruby
# For memory profiling (requires Ruby MRI 2.1+)
gem 'memory_profiler'

# For call-stack profiling flamegraphs (requires Ruby MRI 2.0.0+)
gem 'flamegraph'
gem 'stackprof'     # For Ruby MRI 2.1+
gem 'rack-mini-profiler', require: false
```

`config/initializers/rack_profiler.rb`

```ruby
if Rails.env == 'development'
  require 'rack-mini-profiler'

  # initialization is skipped so trigger it
  Rack::MiniProfilerRails.initialize!(Rails.application)

  # set RedisStore
  uri = URI.parse(ENV.fetch("REDIS_URI"))
  Rack::MiniProfiler.config.storage_options = { :host => uri.host, :port => uri.port, :password => uri.password }
  Rack::MiniProfiler.config.storage = Rack::MiniProfiler::RedisStore
end
```

### Consumes a lot of memory

Use profiler to detect why is your application is slow. Use [stackprof](https://github.com/tmm1/stackprof) in `:object` moder or [rack-mini-profiler](https://github.com/MiniProfiler/rack-mini-profiler) with `?pp=analyze-memory` or [memory_profiler](https://github.com/SamSaffron/memory_profiler).

Also check [Derailed Benchmarks](https://github.com/schneems/derailed_benchmarks): `bundle exec derailed bundle:mem`.

Also [gc_tracer](https://github.com/ko1/gc_tracer), [allocation_tracer](https://github.com/ko1/allocation_tracer), [allocation_stats](https://github.com/srawlins/allocation_stats) and built-in `ObjectSpace` can help.

`config.ru`

```ruby
require ::File.expand_path('../config/environment', __FILE__)

require 'rack/gc_tracer'
require 'rack/allocation_tracer'

use Rack::GCTracerMiddleware, view_page_path: '/gc_tracer', filename: '/tmp/rails-gc_tracer'
use Rack::AllocationTracerMiddleware

run Rails.application
```

### Check how GC works

Use [rack-mini-profiler](https://github.com/MiniProfiler/rack-mini-profiler) with `?pp=profile-gc`, [gc_tracer](https://github.com/ko1/gc_tracer) or built-in `GC::Profiler`.

To read:

 - [That’s Not a Memory Leak, It’s Bloat, 2009](https://blog.engineyard.com/2009/thats-not-a-memory-leak-its-bloat)
 - [Demystifying the Ruby GC, 2013](https://samsaffron.com/archive/2013/11/22/demystifying-the-ruby-gc)
 - [Watching and Understanding the Ruby 2.1 Garbage Collector at Work, 2014](https://thorstenball.com/blog/2014/03/12/watching-understanding-ruby-2.1-garbage-collector/)
 - [Ruby GC Tuning Parameters, 2014](https://helabs.com/artigos/2014/12/19/ruby-gc-tuning-parameters/)
 - [Incremental Garbage Collection in Ruby 2.2, 2015](https://engineering.heroku.com/blogs/2015-02-04-incremental-gc/)
 - [Methods of Memory Management in MRI, 2016](https://youtu.be/r0UjXixkBV8?t=42m20s)
 - [Understanding Ruby GC through GC.stat, 2017](https://www.speedshop.co/2017/03/09/a-guide-to-gc-stat.html)
 - [Object ID in MRI, 2017](https://tenderlovemaking.com/2017/02/01/object-id-in-mri.html)

### Hunting memory errors outside of Ruby object space

Use ruby with jemalloc and [jemal](https://github.com/be9/jemal). Use this command to check if ruby compiled with jemalloc: `ruby -r rbconfig -e "puts RbConfig::CONFIG['LIBS']"`.

To read:

 - [How I spent two weeks hunting a memory leak in Ruby, 2015](http://www.be9.io/2015/09/21/memory-leak/)

```ruby
if ENV['JEMALLOC_STATS']
  STDERR.puts "JEMALLOC_STATS enabled"

  require 'jemal'

  if Jemal.jemalloc_builtin?
    STDERR.puts "jemalloc found"
    Thread.new do
      first = true

      while true
        sleep 5
        stats = Jemal.stats
        stats[:ts] = Time.now.utc.to_i

        File.open(Rails.root + 'log/jemalloc.log', first ? 'w' : 'a') do |f|
          f.puts stats.to_json
        end

        first = false
      end
    end
  end
end
```

### Other tools

 - http://rbkit.codemancers.com/
 - https://github.com/dpogue/rails_server_timings

## Benchmark

Use built-in ruby module `Benchmark` and [benchmark-memory](https://github.com/michaelherold/benchmark-memory).

```ruby
require "benchmark"
Benchmark.benchmark(Benchmark::CAPTION, 7, Benchmark::FORMAT) do |x|
  x.report("test:"){ ypur_code }
end
```

## Faster gems

Faster than default implementations:

```ruby
gem "escape_utils"
gem "fast_blank"
gem "oj"
gem "faster_path"
gem "ox"
gem "hamlit"
gem "mini_mime"
gem "fast_gettext"
```

- [Writing Fast Ruby](https://github.com/JuanitoFatas/fast-ruby).
- [Bootsnap](https://github.com/Shopify/bootsnap), [yomikomu](https://github.com/ko1/yomikomu)
- [posix-spawn](https://github.com/rtomayko/posix-spawn)
- [nakayoshi_fork](https://github.com/ko1/nakayoshi_fork)
- [oobgc](http://tmm1.net/ruby21-oobgc/)
- [concurrent-ruby](https://github.com/ruby-concurrency/concurrent-ruby)

### Faster boot

- <https://github.com/Shopify/bootsnap>
- <https://github.com/ko1/yomikomu>
- <https://github.com/pmq20/ruby-compiler>

## Super fast ruby

[Projects That Are Making Blazing Fast Ruby a Reality, 2016](https://www.sitepoint.com/projects-that-are-making-blazing-fast-ruby-a-reality/).

- https://dev.to/ben/chris-seaton-making-ruby-fast
- http://chrisseaton.com/rubytruffle/
- https://github.com/rubyomr-preview/rubyomr-preview

### Native Extensions

- https://github.com/malept/thermite
- http://usehelix.com/
- https://github.com/phoffer/crystalized_ruby
