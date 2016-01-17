---
layout: post
title: PAAS in the box
---

Comparison of PAAS in the box solutions. How Docker relates to Vagrant? What is otto and nanobox? Enroll your own Heroku for $5?

## [HashiCorp ecosystem](https://hashicorp.com/)
Application delivery done right.
HashiCorp delivers pragmatic solutions to maximize developer and operator agility. Build microservice-driven applications that are codified, automated, scalable and secure.

### [Otto](https://www.ottoproject.io/)
Development and Deployment Made Easy. Meet the Successor to Vagrant.

### [Consul](https://consul.io/)
Service discovery and configuration made easy. Distributed, highly available, and datacenter-aware.

### [Atlas](https://atlas.hashicorp.com/)
**Service**: [pricing](https://atlas.hashicorp.com/pricing)

Atlas unites HashiCorp development and infrastructure management tools to create a version control system for infrastructure. Learn how all the open source tools work together in Atlas to automate, audit, and collaborate on infrastructure changes. Or read below about how Atlas enhances the tools individually.

### [Vagrant](https://www.vagrantup.com/)
Development environments made easy.
Create and configure lightweight, reproducible, and portable development environments.

### [Packer](https://packer.io/)
Packer is a tool for creating machine and container images for multiple platforms from a single source configuration.

### [Serf](https://serfdom.io/)
Serf is a decentralized solution for cluster membership, failure detection, and orchestration. Lightweight and highly available.

### [Terraform](https://terraform.io/)
Build, Combine, and Launch Infrastructure

See also [cloudshaper](https://github.com/dalehamel/cloudshaper)

### [Vault](https://vaultproject.io/)
Vault secures, stores, and tightly controls access to tokens, passwords, certificates, API keys, and other secrets in modern computing. Vault handles leasing, key revocation, key rolling, and auditing. Vault presents a unified API to access multiple backends: HSMs, AWS IAM, SQL databases, raw key/value, and more.

## [Nanobox ecosystem](https://nanobox.io/)
You code, we take care of the rest.

### [Nanobox Desktop](https://desktop.nanobox.io/)
Install nothing, run and develop your app locally

### [Nanobox Cloud](https://nanobox.io/cloud/)
**Service**

Powerful dashboard, your choice of host

### [nanopack](http://nanopack.io/)
Automated, API-Driven Infrastructure

### [Other open-source](https://nanobox.io/open-source/)

## [Dokku ecosystem](http://progrium.viewdocs.io/dokku/)
The smallest PaaS implementation you've ever seen
Docker powered mini-Heroku in around 200 lines of Bash

### [Cedarish](https://github.com/progrium/cedarish)
Heroku Cedar-ish Base Image for Docker

### [Herokuish](https://github.com/gliderlabs/herokuish)
Utility for emulating Heroku build and runtime tasks in containers

## [Docker ecosystem](https://www.docker.com/)
**[pricing](https://www.docker.com/pricing)**

Build, Ship, Run. An open platform for distributed applications for developers and sysadmins

### [Docker machine](https://www.docker.com/docker-machine)
Automated Docker provisioning

### [Docker Swarm](https://www.docker.com/docker-swarm)
Host clustering and container scheduling

### [Docker Compose](https://www.docker.com/docker-compose)
Define multi-container applications

### [Docker Registry](https://www.docker.com/docker-registry)
Open source Docker image distribution

### [Docker Engine](https://www.docker.com/docker-registry)
Creates and runs Docker containers

### [Kitematic](https://www.docker.com/docker-engine)
Desktop GUI for Docker

## Kubernetes/CoreOS ecosystem

### [Kubernetes](http://kubernetes.io/)
Container Cluster Manager from Google.
Manage a cluster of Linux containers as a single system to accelerate Dev and simplify Ops.

### [CoreOS](https://coreos.com/)
Operating system

### [etcd](https://coreos.com/etcd/)
A highly-available key value store for shared configuration and service discovery

### [rkt](https://github.com/coreos/rkt)
rkt is an App Container runtime for Linux

### [fleet](https://github.com/coreos/fleet)
A Distributed init System

### [flannel](https://github.com/coreos/flannel)
flannel is an etcd backed network fabric for containers

### Other open source
 - [coreos](https://github.com/coreos)
 - [kubernetes](https://github.com/kubernetes)

## [deis ecosystem](http://deis.io/)
Open Source Application Platform For Public and Private Clouds.
Deis (pronounced DAY-iss) is an open source PaaS that makes it easy to deploy and manage applications on your own servers. Deis builds upon Docker and CoreOS to provide a lightweight PaaS with a Heroku-inspired workflow.

## [flynn ecosystem](https://flynn.io/)
Flynn fixes everything that's wrong with the process of deploying, scaling, and managing your applications. So they run the way they're supposed to – with ease. And you can do more of what you want to do and less of what you have to do.

### Other open source
[flynn](https://github.com/flynn)

## TODO
 - make table to compare toolset
 - make table to analyze underlying technologies (most of the use docker and vagrant)
 - explicitly mark pay services (add link to prices) and OS (add link to repo)

## Other links
 - [mesosphere](https://mesosphere.com/downloads/), https://github.com/mesosphere + [marathon](https://github.com/mesosphere/marathon)
 - http://thesecretlivesofdata.com/raft/ Raft Understandable Distributed Consensus
 - http://nixos.org/ The Purely Functional Linux Distribution
 - https://smartos.org/ SmartOS unites four extraordinary technologies to revolutionize the datacenter: [ZFS](http://open-zfs.org/wiki/Main_Page), [DTrace](http://dtrace.org/blogs/about/), [Zones](https://en.wikipedia.org/wiki/Solaris_Containers), [KVM](http://www.linux-kvm.org/page/Main_Page)
 - http://getcloudify.org/ Cloud Orchestration & Automation Made Easy
