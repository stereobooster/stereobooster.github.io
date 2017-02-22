---
layout: post
title: "Ineffective Ruby: default arguments"
---

Ruby arguments evaluated on function call. So if you have default arguments like this `a = {}` it means Ruby will create new object for every call without arguments. Lets see in action:

Example 1:

```ruby
$ irb
> def test_hash(a={}); end
v1 = ObjectSpace.count_objects
10000.times{ test_hash }
v2 = ObjectSpace.count_objects
v2[:T_HASH] - v1[:T_HASH]
=> 10015 
exit
```

In first example Ruby created 10000 anonymous hashes which will be sweeped on the next GC run. But do you want to make a job for it in first place? And then they complain about GC pauses :/

Example 2:

```ruby
$ irb
> def test_nil(a=nil); end
v1 = ObjectSpace.count_objects
10000.times{ test_nil }
v2 = ObjectSpace.count_objects
v2[:T_HASH] - v1[:T_HASH]
=> 18
exit

$ irb
> EM_HASH = {}.freeze
def test_hash2(a=EM_HASH); end
v1 = ObjectSpace.count_objects
10000.times{ test_hash2 }
v2 = ObjectSpace.count_objects
v2[:T_HASH] - v1[:T_HASH]
=> 19 
exit
```

No anonymous hashes.
