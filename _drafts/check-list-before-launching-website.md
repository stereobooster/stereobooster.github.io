---
layout: post
title: Check List Before Launching Website
feature-img: "img/sample_feature_img_3.png"
---

Work in progress: still adding items to the list. Each item should contain: sensible, descriptive name; optionally short explanation why it is important and examples of tools to help solve the issue

## Common
 - Uptime monitoring. Pingdom or similar
 - Application error monitoring. Sentry or similar. Setup monitoring for both frontend and backend. Store name of the server, hash of commit or build id, user id
 - Setup cath all mail account
 - Monitor 404 errors. Google analytics, server logs or similar
 - Smart 404 errors

## Frontend
 - Visitors monitoring. Google analytics or similar
 - Test with pagespeed
 - Decide and explicitly document targeted browsers, OSes, screen resolutions
 - Test in targeted browsers

## Backend
 - Setup automatic database and files backups: hourly (saving up to 48 latest entries), daily (14), weekly (8), monthly. Test recovery process
 - Make script to restore db backups to developers machine with sensitive data being removed
 - Setup log collection and storing. Papertrail or similar
 - Application monitoring: time spent, CPU, bottlenecks, error rates. NewRelic or similar
 - Server monitoring: hard drive space, CPU, RAM. NewRelic or similar
 - Implement script to deploy in one simple step. Capistrano or similar
 - Automate servers provisioning. Chef, Puppet or similar

## Development
 - Store source code in version control system. GIT
 - Use issue tracker. GitHub issues, PivotalTracker or similar
 - Make use of automatic tests. Rspec, Mocha + Sinon + Chai or similar
 - Check tests coverage. Simplecov, Blanket or similar
 - Coding standards. Use automatic scripts to check them. Rubocop, JShint or similar
 - Use soft to check code quality. Code Climate, rails_best_practices, metric_fu, bullet, sandi_meter, traceroute
 - Use soft to check security issues. brakemanscanner.org, bundler-audit, dawnscanner
 - Use CI server. Travis, circleci, jenkins or similar

## Copywriting
 - Check spelling
 - Check typography. Smartypants, typograf.ru or similar
 - Check stylistics. glvrd.ru or similar

## SEO & SMO
 - Setup unique domain: www vs no-www. Use redirects for proper domain name
 - Check all pages have title, description and canonical url
 - Add RDF markup if appropriate
 - Add Open Graph markup
 - Add Twitter Cards markup
 - Add sitemap and submit it to search engines
 - Add your site to Google Webmasters, Yandex Webmaster etc.

## Design
 - Error pages
 - Favicon
