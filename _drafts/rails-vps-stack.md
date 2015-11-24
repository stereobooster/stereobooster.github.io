---
layout: post
title: Rails VPS stack
---

Why VPS anot not private PaaS (like Heroku)? Do not like [vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in)

## Provisioning

After small research I found that Docker is cool solution, which used by a lot of good companies. Like Heroku. Here is how they build [Cedar image](https://github.com/heroku/stack-images). There is OS initiative to reproduce heroku buildpacks/cedar expereience with your private cloud:
 - [dokku](https://github.com/progrium/dokku)

Or you can go with other good solutions:
 - [passenger-docker](https://github.com/phusion/passenger-docker)
 - [ruby-deploy-kickstart](https://github.com/rdsubhas/ruby-deploy-kickstart)

### Links
 - https://medium.com/@rdsubhas/ruby-in-production-lessons-learned-36d7ab726d99
 - https://docs.docker.com/machine/drivers/virtualbox/

## Deployment
Deployment: capistrano (mina, vlad; TODO: more investigtion on this)
 - http://robmclarty.com/blog/how-to-deploy-a-rails-4-app-with-git-and-capistrano
 - https://github.com/capistrano/sshkit
 - http://ryaneschinger.com/blog/11-capistrano-3-plugins-to-simplify-your-rails-deployments/

## Simplest development environment

 - Framework: rails
 - Database: postgresql
 - Runtime: ruby + rbenv/BrightBox ruby
 - Web server: thin

## Simplest production

 - Application server: puma/raptor
 - Reverse proxy: nginx + pagespeed
 - Provisioning: docker
 - OS: Ubuntu server LTS
 - Process monitoring: foreman + upstart/runit
 - Local provision test: vagrant
 - Deployment:

### Step 2:
 - CDN (S3)
 - RAM cache: memcache + nginx-memcache

### Advanced
 - Load balancer: HAproxy
 - Pub/Sub: Redis
 - Resource monitoring: sensu (?)
 - Application monitoring: skylight (?)
 - Application error loging (?)

### Links
 - http://blog.mccartie.com/2014/08/28/digital-ocean.html
 - http://blog.cloud66.com/cost-of-setting-up-and-running-a-rails-app/
 - https://www.airpair.com/ruby-on-rails/posts/rails-host-comparison-aws-digitalocean-heroku-engineyard
 - https://github.com/showcases/devops-tools
 - https://github.com/jpstokes/vagrant-puppet-rails-nginx-postgres

## Deployment part 2: zero downtime
 - http://www.slideshare.net/pedrobelo/zero-downtime-deploys-for-rails-apps
 - http://blog.codeship.com/rails-migrations-zero-downtime/
 - http://martinfowler.com/bliki/BlueGreenDeployment.html
