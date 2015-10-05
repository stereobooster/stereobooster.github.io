---
layout: post
title: Constants stored in database
feature-img: "img/sample_feature_img_3.png"
tags:
  - rule of thumb
---

**TL;DR** Should I store this entity in DB or not? If you can not add record to DB (or delete record from DB) without changing code, you should not store those entities in DB.

### What I'm talking about?
Sometimes there are cases when you want to store entities in DB, but it just doesn't feel right. Good example: set of access `rights`. To support `rights` (e.g. restriction of access or otherwise) you should change code, you can not add new record to the database without changing code. But mapping of `rights` to the `users` should be definetly sored in the DB.

So we have dilemma: it would be much easier to implement `right` entity as DB model, to use it in the mapping with `users`. But on the other side it is kind of repeating code: you store record in DB, plus declaring constants in the code. There is simple approach to overcome it: use object declared at run time (not stored in DB).

### Existing solutions
 - For Active Record: [active_hash](https://github.com/zilkey/active_hash)


