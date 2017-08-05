---
layout: post
title: Hacks for LIKE queries
---

It is well known that only prefix searches work good for `LIKE` queries (`LIKE "abc%"`), but not for suffix queries (`LIKE "%abc%"`). This happens because of [databases often use B-Tress indexes](http://use-the-index-luke.com/sql/anatomy/the-tree) for text data. There are also full-text search capabilities in some databases, but this is not the same as pattern matching search with `LIKE`. What to do if you need suffix search? Depends on the case.

### Suffix only search - `LIKE "abc%"`

If you need only suffix search, but not both - solution is simple. Create an additional column with reversed data and use prefix search `LIKE "%cba"`.

### Detect beginning of a search term

If you can detect the beginning of a search term you can reduce `LIKE "%Abc%"` to `LIKE "Abc%"`. For example, if you have columns with phone numbers and user searches for `+123456789`, you know that `+` is the start of the phone number and it can not be in the middle of a word. The same can be done for capital letters and names, unless you have Irish names, like `McDouglas`.

### Trigram index

[PostgreSQL supports trigram indexes](https://about.gitlab.com/2016/03/18/fast-search-using-postgresql-trigram-indexes/). With trigram indexes you can search for `LIKE "%abc%"`, trade off is a huge size of the index.

[Hack for MySQL](https://stackoverflow.com/a/3320810/1190041).
