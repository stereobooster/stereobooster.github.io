---
layout: post
title: To UUID or not to UUID
---

At some point, there started a fashion for UUIDs as primary key in the database. Maybe it happened after [Jeff Atwood post](https://blog.codinghorror.com/primary-keys-ids-versus-guids/).

## So it is super nice to have a unique identifier as ID:

- you can generate it at the application level, no need to do a roundtrip to the database to get ID. I can imagine scenario in which complex data generated at application level, relationships between objects established at the same level and later all the data get stored in the database, like in [the repository pattern](https://martinfowler.com/eaaCatalog/repository.html)
- you can have to disjoint database which can be later merged. I can imagine something like [cockroachdb](https://github.com/cockroachdb/cockroach) with instances in different continents, so one network roundtrip will be minimum 100ms (because of cosmic speed limit)
- it solves ID enumeration problem, but on the other side, UUID is too lengthy to use in URLs. Hexademical encoding (and 4 minuses) is not the most compact way to represent 128 bits, base64 or Base32 much more compact. [hashids](http://hashids.org/) is another nice way to fight with enumeration and achieve compact IDs.
- UUID (virtually) is not just a unique identifier of a row in a table, but across the whole database (unless you have that huge DB, that you have collisions). This can be useful. On the other side given UUID alone, there is no way to understand what is the type of object. Some namespace in UUID would solve this issue. Also, other information can be embedded in UUID, like shard ID.

## So far so good, but there are some cons:

- The main disadvantage is the performance of the unique index (binary trees do not like random values). But the solution for this is partially ordered UUID, for example `newsequentialid()` in SQL Server or trick with GUID v1 [described in this article](https://www.percona.com/blog/2014/12/19/store-uuid-optimized-way/).
- bigger size, well 128 bits is only 4 times bigger than standard integers. That is not so bad, but... I saw database where UUIDs were stored as 36 chars, wait for it, utf-8 encoding. MySQL needs 3 times more size of the index for utf-8. Now, when most database support UUID natively, there should be less such of problems ([MySQL](http://mysqlserverteam.com/storing-uuid-values-in-mysql-tables/), [PostgreSQL](https://www.postgresql.org/docs/9.4/static/datatype-uuid.html))

## ulid to save the day

[ulid](https://github.com/alizain/ulid) or Universally Unique Lexicographically Sortable Identifier is engineered to overcome all UUID disadvantages:

- it is lexicographically sortable, so should be much faster to insert in a unique index
- it has compact text representation (thanks to Base32), so much easier to handle and possible to use in URLs
- case insensitive and no special characters as a special bonus for usage with URLs

## Other references

- <http://instagram-engineering.tumblr.com/post/10853187575/sharding-ids-at-instagram>
- <https://firebase.googleblog.com/2015/02/the-2120-ways-to-ensure-unique_68.html>
- [uuid in Rails 5](http://blog.bigbinary.com/2016/04/04/rails-5-provides-application-config-to-use-UUID-as-primary-key.html)
- [Sequel::Plugins::Uuid](http://sequel.jeremyevans.net/rdoc-plugins/classes/Sequel/Plugins/Uuid.html)
- [activeuuid](https://github.com/jashmenn/activeuuid)
- [Ascii85](https://en.wikipedia.org/wiki/Ascii85)
- [base91](http://base91.sourceforge.net/#a3)
- [Base122](http://blog.kevinalbs.com/base122)
- [base65536](http://isticktoit.net/?p=1504)
