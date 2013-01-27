---
layout: post
title: Bare metal
description: Mini one task OSes runing VM's. Suitable for HPC and Cloud Computing
keyword: HPC, Cloud Computing, Erlang, OCaml, Java
tags:
breadcrumbs:
  name: "No pain, no gain"
---

<br><br><br>

## Mini OSes
 - [nix](http://lsub.org/ls/nix.html). OSes are built as decades ago. Nix is able to lend cores to applications with no OS interference (not even clock interrupts), but still provides all functionality of a conventional operating system.
 - [BareMetal](http://www.returninfinity.com/baremetal.html). BareMetal is a 64-bit OS for x86-64 based computers. The OS is written entirely in Assembly, while applications can be written in Assembly or C/C++. 
 - MiniOS. Bundled with [Xen](http://xen.org/). Not really usable. It is main purpose to demonstrate how to work with Xen, beacuse of lack of documentation.
 - [Exokernel](http://en.wikipedia.org/wiki/Exokernel). Exokernel is an operating system kernel developed by the MIT Parallel and Distributed Operating Systems group, and also a class of similar operating systems.

## VMs running "Bare Metal"
 - [GuestVM](http://labs.oracle.com/projects/guestvm/). Java on Xen. [video](http://www.youtube.com/watch?v=iHIaH12f2Ek)
   - [Scala](http://www.scala-lang.org/node/273)
   - [Clojure](http://clojure.org/)
   - [jruby](http://jruby.org/)
 - [HaLVM](http://corp.galois.com/halvm). Haskell on Xen.
 - [openmirage](http://www.openmirage.org/). OCaml on Xen. [video](http://vimeo.com/57412215)
 - [LING](http://erlangonxen.org/). Erlang on Xen. [video](http://www.youtube.com/watch?feature=player_embedded&v=1FgTjSY8YgU)
   - [elixir](http://elixir-lang.org/)
 - [kerlnel](http://kerlnel.org/). Erlang on BareMetal.

## Offtopic
 - [WEBSOCKET DEMO RESULTS V2](http://eric.themoritzfamily.com/websocket-demo-results-v2.html)
 - [parallella](http://www.parallella.org/introduction/)
 - [erlang-embedded](https://github.com/esl/erlang-embedded). Erlang on Raspberry Pi. [video](http://www.youtube.com/watch?v=HjbNyA1ASkE)
 - [eLua](http://www.eluaproject.net/overview)
 - [mruby](https://github.com/mruby/mruby)
 - [Beyond Ruby: Mirah, Reia, Rite](http://www.igvita.com/2010/12/14/beyond-ruby-mirah-reia-rite/)
 - [Concurrency with Actors, Goroutines & Ruby](http://www.igvita.com/2010/12/02/concurrency-with-actors-goroutines-ruby/)
 - [MMIX](http://en.wikipedia.org/wiki/MMIX)
 - [hirefire](https://github.com/meskyanichi/hirefire)
 - [aws-autoscaling](https://github.com/Netflix/aws-autoscaling/wiki)
