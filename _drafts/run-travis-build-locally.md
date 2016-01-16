---
layout: post
title: run travis build locally
---

Ratio:

https://github.com/travis-ci/travis-ci/issues/2114
http://stackoverflow.com/questions/21053657/how-to-run-travis-ci-locally/24936720#24936720

Existing solutions:

 - https://github.com/grosser/wwtd (ruby only, no VM, limited subset, no dependency managment)
 - [DEPRECATED] https://github.com/DanielG/travis-run
 - [DEPRECATED] http://reidburke.com/2013/01/28/debugging-travis-builds/
 - [DEPRECATED] http://ruby-journal.com/debug-your-failed-test-in-travis-ci/
 - [ABANDONED] [sous chef](https://github.com/michaelklishin/sous-chef)

Possible solution (1):

Vagrant + chef (travis-cookbooks) + travis-build / wwtd

Otto doing something similar

1. Tool which can generate chef provision scrpt based on `.travis.yml`. Using [travis cookbooks](https://github.com/travis-ci/travis-cookbooks)
2. Build and provision VM with `vagrant`
3. Run test script in VM using [travis-build](https://github.com/travis-ci/travis-build) or [wwtd](https://github.com/grosser/wwtd)

```
cd ~/my
git clone https://github.com/travis-ci/travis-build.git
ln -s ~/my/travis-build ~/.travis/travis-build
bundle install --gemfile ~/.travis/travis-build/Gemfile
cd my_project_with_Travis
travis compile
travis compile > build.sh
```

Possible solution (2):

Docker (travis images) + chef (?) + travis-build / wwtd

Heroku toolbelt doing something similar https://github.com/heroku/heroku-docker
https://github.com/codekitchen/dinghy


