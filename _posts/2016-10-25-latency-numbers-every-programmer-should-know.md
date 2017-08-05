---
layout: post
title: Latency Numbers Every Programmer Should Know
---

![](/assets/posts/latency-numbers-every-programmer-should-know/chart.png)

[Intercative version](https://people.eecs.berkeley.edu/~rcs/research/interactive_latency.html)

[Gallery of Processor Cache Effects](http://igoro.com/archive/gallery-of-processor-cache-effects/)

![](/assets/posts/latency-numbers-every-programmer-should-know/cpu-operations.png)


```
Latency Comparison Numbers
--------------------------
L1 cache reference                           0.5 ns
Branch mispredict                            5   ns
L2 cache reference                           7   ns                      14x L1 cache
Mutex lock/unlock                           25   ns
Main memory reference                      100   ns                      20x L2 cache, 200x L1 cache
Compress 1K bytes with Zippy             3,000   ns        3 us
Send 1K bytes over 1 Gbps network       10,000   ns       10 us
Read 4K randomly from SSD*             150,000   ns      150 us          ~1GB/sec SSD
Read 1 MB sequentially from memory     250,000   ns      250 us
Round trip within same datacenter      500,000   ns      500 us
Read 1 MB sequentially from SSD*     1,000,000   ns    1,000 us    1 ms  ~1GB/sec SSD, 4X memory
Disk seek                           10,000,000   ns   10,000 us   10 ms  20x datacenter roundtrip
Read 1 MB sequentially from disk    20,000,000   ns   20,000 us   20 ms  80x memory, 20X SSD
Send packet CA->Netherlands->CA    150,000,000   ns  150,000 us  150 ms

Notes
-----
1 ns = 10^-9 seconds
1 us = 10^-6 seconds = 1,000 ns
1 ms = 10^-3 seconds = 1,000 us = 1,000,000 ns

Credit
------
By Jeff Dean:               http://research.google.com/people/jeff/
Originally by Peter Norvig: http://norvig.com/21-days.html#answers

```

Source: [gist](https://gist.github.com/jboner/2841832)

<iframe width="560" height="315" src="https://www.youtube.com/embed/JEpsKnWZrJ8?rel=0?ecver=1" frameborder="0" allowfullscreen></iframe>

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Why your webapp is slow, in one slide. <a href="https://twitter.com/hashtag/pyconau?src=hash">#pyconau</a> <a href="https://twitter.com/hashtag/djangoconau?src=hash">#djangoconau</a> <a href="https://t.co/IQ0xjqWq7A">pic.twitter.com/IQ0xjqWq7A</a></p>&mdash; Sam @ pycon au (@skimbrel) <a href="https://twitter.com/skimbrel/status/893337218101555200">August 4, 2017</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>




