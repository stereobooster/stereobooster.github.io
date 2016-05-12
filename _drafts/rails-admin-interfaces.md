---
layout: post
title: Rails Admin Interfaces
tags:
  - rails
  - ruby-gem
  - tools
---

There are two new kids on the block. Which are not mentioned on [ruby toolbox](https://www.ruby-toolbox.com/categories/rails_admin_interfaces) yet. They basically share same ideas. As for me `Godmin` looks more clear. `Administrate` baked by Thoughtbot. Haven't tried any of them in production.

## Godmin

[Godmin](https://github.com/varvet/godmin) is an admin framework for Rails 4+. Use it to build dedicated admin sections for your apps, or standalone admin apps such as internal tools. It has support for common features such as scoping, filtering and performing batch actions on your models

### Guiding Principles

Godmin differs from tools like [ActiveAdmin](https://github.com/activeadmin/activeadmin) and [RailsAdmin](https://github.com/sferik/rails_admin) in how admin sections are created. Rather than being **DSL**-based, Godmin is a **set of opt-in modules and helpers** that can be applied to regular Rails apps and engines. An admin section built with Godmin is just that, a **regular Rails app** or Rails engine, with regular routes, controllers and views. That means there is less to learn, because you already know most of it, and fewer constraints on what you can do. After all, administrators are users too, and what better way to provide them with a tailor made experience than building them a Rails app?

## Administrate by Thoughtbot

[Administrate](https://github.com/thoughtbot/administrate). A Rails engine that helps you put together a super-flexible admin dashboard.

### Guiding Principles

Administrate is heavily inspired by projects like [Rails Admin](https://github.com/sferik/rails_admin) and [ActiveAdmin](https://github.com/activeadmin/activeadmin), but aims to provide a better user experience for site admins, and to be easier for developers to customize.

To do that, Administrate follows a few simple rules:

 - No **DSLs** (domain-specific languages)
 - Support the simplest use cases, and let the user override defaults with standard tools such as plain Rails controllers and views.
 - Break up the library into **core components and plugins**, so each component stays small and easy to maintain.


