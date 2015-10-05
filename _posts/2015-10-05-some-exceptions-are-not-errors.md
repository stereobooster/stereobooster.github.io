---
layout: post
title: Some exceptions are not errors
feature-img: "img/sample_feature_img_3.png"
tag: "make things clear"
---

**TL;DR** If exceptions used for flow control, they should not be treated as errors.

For example it makes no sense to report exception, which you use for control flow to exception logging service (like Sentry).

Typical example:

```ruby
rescue_from CanCan::AccessDenied do |exception|
  redirect_to root_url, :alert => exception.message
end
```

But there are some edge cases. Consider ActiveRecord::RecordNotFound, which can be used for control flow. Everything works as supposed if you work with `resource` (like `resource/:id`). But if your action retrieves more then one record, you probably want to know which exactly entity wasn't found.
