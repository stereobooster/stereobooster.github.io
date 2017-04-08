---
layout: post
title: Reference data as dependency
---

**TL;DR** Let's suppose your application needs some kind of reference data, for example, names of all countries or currencies or time zone, you have two options:

- copy data from open source to your application and work with it directly
- use third-party dependency (library, npm package, ruby gem etc) which will provide this data

The second approach is a good choice: you get versioning, community support, bugfixes.


## Case studies

### ruby-mime-types

[Ruby MIME type](https://github.com/mime-types/ruby-mime-types) registry and library. It is used by `mail` gem which used by `action mailer` which used by `rails`- which means it is very popular.

**Problem**: memory hog. Before it was fixed it took about ~30mb of the memory of ruby. After it was fixed it takes ~7mb.

[`mini_mime`](https://github.com/discourse/mini_mime) to the rescue. It uses the cache-proxy-like thing which bounds how many simultaneous objects to store in the memory. [This PR](https://github.com/mikel/mail/pull/1059) describes in details what are the problems and what was fixed.

There is, even more, optimization on its way: [replace lookup with native extension and use capnproto for data storage](https://github.com/mime-types/ruby-mime-types/issues/123#issuecomment-252806519).

### all-the-cities

[all-the-cities](https://github.com/zeke/all-the-cities) is npm package which contains all the 138,398 cities of the world with a population of at least 1000 inhabitants, in a big JSON array.

**Problem**: slow startup.

[Problem was solved by replacing a text-based file with binary file](https://github.com/zeke/all-the-cities/pull/3), Protocol Buffers to be specific.

See: [Comparison of data serialization formats](https://en.wikipedia.org/wiki/Comparison_of_data_serialization_formats). Pay special atteintion to [capnproto](https://capnproto.org/index.html).

### Countries

[Countries](https://github.com/hexorx/countries) is ruby gem.
> Countries is a collection of all sorts of useful information for every country in the ISO 3166 standard.

An interesting feature is that it looks like `ActiveRecord` interface, which is familiar to any Rails developer.

### ActiveHash

> [ActiveHash](https://github.com/zilkey/active_hash) is a simple base class that allows you to use a ruby hash as a read-only data source for an ActiveRecord-like model.
>
>ActiveHash also ships with:
>
> - ActiveFile: a base class that you can use to create file data sources
> - ActiveYaml: a base class that will turn YAML into a hash and load the data into an ActiveHash object

Idea: use binary format for data and C or Rust extension to traverse it.

### Predefined schema

[world.db](https://github.com/worlddb/world.db/tree/master/worlddb-models) takes a bit other approaches. Instead of just bundling reference data it provides predefined data models.

### Embedded database

While you can start with simple Hash or Array to bundle data. You also can go with full featured embedded database. Most famous would be SQLite, for example, [MapBox suggest distributing map tiles as SQLite files](https://github.com/mapbox/mbtiles-spec).

But there are much more interesting options:

- [rocksdb](http://rocksdb.org/docs/getting-started.html)
- [LMDB](https://symas.com/offerings/lightning-memory-mapped-database/). Memory-mapped, allowing for zero-copy lookup and iteration
- [MDBM](https://yahooeng.tumblr.com/post/104861108931/mdbm-high-speed-database) which uses “Memory Mapping” and “Zero-Copy”.
- [Mnesia](http://erlang.org/faq/mnesia.html) is the somewhat odd name for the real-time, distributed database which comes with Erlang.

See also:

- [awesome - db](https://github.com/numetriclabz/awesome-db)
- [datomic](http://www.datomic.com/about.html)
- [A Look Into Realm's Core DB Engine](https://realm.io/news/jp-simard-realm-core-database-engine/)
- [Wiki: Embedded database](https://en.wikipedia.org/wiki/Embedded_database)

### Data strcutures

You do not need a full database when good data structure will do. You just need to implement it in something performant like C or Rust.

Examples:

- [Resizable, Scalable, Concurrent Hash Tables via Relativistic Programming](https://www.usenix.org/legacy/event/atc11/tech/final_files/Triplett.pdf)
- [M3: High-Performance Memory Management from Off-the-Shelf Components](http://theory.stanford.edu/~aiken/publications/papers/ismm14.pdf)
- [CPHASH: A Cache-Partitioned Hash Table](https://people.csail.mit.edu/nickolai/papers/metreveli-cphash-tr.pdf)
- [Highly-Concurrent Doubly-Linked Lists](https://arxiv.org/pdf/1112.1141v1.pdf)
- [Lock-Free and Practical Doubly Linked List-Based Deques Using Single-Word Compare-and-Swap](http://www.cse.chalmers.se/~tsigas/papers/Lock-Free%20Doubly%20Linked%20lists%20and%20Deques%20-OPODIS04.pdf)
- [Purely Functional Data Structures](https://www.cs.cmu.edu/~rwh/theses/okasaki.pdf)

## Open data

Last, but not least question: is where to get the data. [Open data](https://okfn.org/opendata/) is the nice initiative which addresses this problem. See also: [Awesome Public Datasets](https://github.com/caesar0301/awesome-public-datasets)
