---
layout: post
title: Factorial
---

Different ways to define factorial function. Using it because it is good example of recursive function.


### Imperative implementation

```js
const fact = n => {
  let res = 1
  for (let i = 1; i <= n; i++) {
    res = res * i
  }
  return res
}
```

### Recursive implementation

```js
const fact = n => n < 2 ? 1 : n * fact(n-1)
```

### Fixed-point combinator implementation

Most known fixed-point combinator is Y combinator, but it will not work in JS, because of order of evaluation. So we will use Z combinator.

```js
// The Y combinator is defined as:
// Y          = λf.(λx.f (x x))(λx.f (x x))
// The Z combinator is defined as:
// Z          = λf.(λx.f (λv.((x x) v))) (λx.f (λv.((x x) v)))

const Z       = f => (x => f (v => ((x (x)) (v)))) (x => f (v => ((x (x)) (v))))
const factgen = fact => n => n < 2 ? 1 : n * fact(n-1)
const fact    = Z(factgen)
```

### Effective implementation

Despite the fact it is often used as example of recursive function, it is very ineffective way to calculate it. Check out [this link](http://www.luschny.de/math/factorial/conclusions.html) for effective implementations.
