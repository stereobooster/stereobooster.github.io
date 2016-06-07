---
layout: post
title: "Rails: fighting N+1 query problem"
tags:
  - rails
  - ruby
---

This problem is well known and have been solved 1000 times before. But most articles on rails and `N+1` problem address mostly `includes` function. There are actually some more techniques (much simpler, but not obvious to fight this problem). I want to list them all.



## Example 1

We have following models

```ruby
class Company < ActiveRecord::Base
  has_many :workers
end

class Worker < ActiveRecord::Base
  belongs_to :company
end
```

And following decorator:

```ruby
class WorkerDecorator < Draper::Decorator
  def to_link
    h.link_to(name, h.company_worker_path(id: object.company.id, worker_id: object.id))
  end
end
```

I'm using `draper` for this decorator. For other options see [my post on decorators](/ruby-decorators).

And view

```ruby
<% decorated_workers.each do |worker| %>
  <li><%= worker.to_link %></li>
<% end %>
```

This will produce `N+1` problem. Simplest fix would be to use `company_id` directly instead of fetching `company` record.

```ruby
class WorkerDecorator < Draper::Decorator
  def to_link
    h.link_to(name, h.company_worker_path(id: object.company_id, worker_id: object.id))
  end
end
```

## Example 2

The same code as previous, but we need to show company name for each worker.

```ruby
class WorkerDecorator < Draper::Decorator
  def to_link
    h.link_to("#{name} (#{object.company.name})", h.company_worker_path(id: object.company.id, worker_id: object.id))
  end
end
```

This problem can be solved by preloading company records all at once.

```ruby
workers = Worker.all.includes(:company)
```

Also read [about differences between includes, preload and eager_load](http://blog.arkency.com/2013/12/rails4-preloading/).

## Example 3

We need to show company dashboard. So we want to retrieve company and all its workers from database.

```
company = Company.find(params[:id])
workers = company.workers
```

We know that every worker on this page have the same company.

First option: use `inverse_of`, so that `worker.company` would return the same `company` from which `workers` were fetched.

```ruby
class Company < ActiveRecord::Base
  has_many :workers, inverse_of: :company
end
```

Second option: use the same instance of company everywhere explicitly.

```ruby
class WorkerDecorator < Draper::Decorator
  def to_link(company)
    h.link_to("#{name} (#{company.name})", h.company_worker_path(id: company.id, worker_id: object.id))
  end
end
```

## Example 4

We need to show companies list with latest 3 workers hired.

Technique to optimize that kind of cases well explained in [this thoughtbot article](https://robots.thoughtbot.com/active-record-eager-loading-with-query-objects-and-decorators).


## See also

- [Advanced query optimization](https://thoughtbot.com/upcase/videos/advanced-query-optimization)
