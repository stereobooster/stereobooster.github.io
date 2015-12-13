---
layout: post
title: PaaS, microservices etc.
---

# Container runner/management
- [kubernetes](http://kubernetes.io/). Manage a cluster of Linux containers as a single system to accelerate Dev and simplify Ops. Backed by Google
- [docker](https://www.docker.com/). Docker Engine or “Docker” creates and runs Docker containers.

## Some history behind

### Where it begins

First time operating system-level virtualization was introduced in 2004 for Solaris OS and named [Solaris Zones](https://en.wikipedia.org/wiki/Solaris_Containers). Same technologies exist in Linux - [LXC](https://linuxcontainers.org/); FreeBSD - [jails](https://www.freebsd.org/doc/handbook/jails.html).

### Docker
True glory containers achieved thanks to the Docker. It was first time introduce in 2013 in Solomon Hykes’s famous five-minute [presentation at PyCon](https://www.youtube.com/watch?v=wW9CAH9nSLs).
Initially Docker used [LXC](https://linuxcontainers.org/). [In version 0.9](http://www.infoq.com/news/2014/03/docker_0_9) they introduced their own [libcontainer](https://github.com/docker/libcontainer). [In 2015](http://blog.docker.com/2015/06/open-container-project-foundation/) Docker is donating its container format and runtime, [runc](https://github.com/opencontainers/runc), to the [OCI](http://www.opencontainers.org/) to serve as the cornerstone of this new effort.

See also:

 - [Lightweight virtualization system based on LXC and BTRFS. See dotcloud/docker.](https://github.com/docker/dockerlite)

### CoreOS rkt

Somehow CoreOS wasn't happy with what Docker provides, so they created their own standard organization [App Container](https://github.com/appc) and container runner [rkt](https://github.com/coreos/rkt). [Read more](https://coreos.com/blog/rocket/)

# Container OSes

See [Container OS comparison](https://blog.codeship.com/container-os-comparison/)

# Service discovery, configuration

 - [consul](https://consul.io/): Service Discovery, Failure Detection, Multi Datacenter, Key/Value Storage, DNS QUERY INTERFACE. Implements RAFT
 - [etcd](https://github.com/coreos/etcd) Distributed reliable key-value store for the most critical data of a distributed system
 - [flannel](https://github.com/coreos/flannel) flannel is an etcd backed network fabric for containers

# Infrastructure

 - [terraform](https://terraform.io/). See https://terraform.io/intro/vs/
 - [openstack](http://www.openstack.org/software/project-navigator/) Open source software for creating private and public clouds.
 - [Apache CloudStack](http://cloudstack.apache.org/) is a top-level project of the Apache Software Foundation (ASF). The project develops open source software for deploying public and private Infrastructure-as-a-Service (IaaS) clouds.

# Cron, Job Scheduler

 - [nomad](https://www.nomadproject.io/) Easily deploy applications at any scale
 - [Chronos](http://mesos.github.io/chronos/) A fault tolerant job scheduler for Mesos which handles dependencies and ISO8601 based schedules

# Monitoring

 - https://github.com/kubernetes/heapster
 - https://github.com/coreos/khealth
 - https://github.com/google/cadvisor
 - http://prometheus.io/
 - http://rancher.com/comparing-monitoring-options-for-docker-deployments/

 http://www.infoworld.com/article/2976930/application-virtualization/6-monitoring-tools-docker-containers.html

# Log management
