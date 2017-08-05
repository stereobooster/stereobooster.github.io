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

### Recursive implementation without TCO

```js
const fact = n => n < 2 ? 1 : n * fact(n-1)

//fact(50000)
//RangeError: Maximum call stack size exceeded.
```

### Recursive implementation with TCO

Requires [ES6 tail call optimisation](https://kangax.github.io/compat-table/es6/#test-proper_tail_calls_(tail_call_optimisation))

```js
'use strict';

const factIter = (product, counter, maxCount) => {
  if (counter > maxCount) return product
  return factIter(counter * product, counter + 1, maxCount)
}

const fact = n => factIter(1, 1, n)

//fact(50000)
//Infinity
```

### Recursive implementation with trampoline

Unsafe hack with eval

```js
const trampoline = (fn) => {
  let newFn = eval(fn.toString().replace(new RegExp(fn.name + '\\(([^\\)]*)\\)'), '[$1]'))
  return function() {
    let result = newFn.apply(null, arguments)
    while (result instanceof Array) result = newFn.apply(null, result)
    return result
  }
}

const _factIter = (product, counter, maxCount) => {
  if (counter > maxCount) return product
  return _factIter(counter * product, counter + 1, maxCount)
}

const factIter = trampoline(_factIter)
```

[Straightforward implementation](http://www.datchley.name/recursion-tail-calls-and-trampolines/) with `function` (note: `() => {}` will not work here):

```js
const trampoline = (fn) => {
  return function () {
    let result = fn.apply(null, arguments)
    while (result instanceof Function) result = result()
    return result
  }
}

const _factIter = (product, counter, maxCount) => {
  if (counter > maxCount) return product
  return () => _factIter(counter * product, counter + 1, maxCount)
}

const factIter = trampoline(_factIter)

const fact = n => factIter(1, 1, n)

//fact(50000)
//Infinity
```

### Recursive, but not recursive implementation

Formally `fact` function is not recursive at the moment of declaration, but instead we rely on closures. Original idea is from [Strachey paper](https://www.itu.dk/courses/BPRD/E2009/fundamental-1967.pdf).

```js
let g
const fact = n => n < 2 ? 1 : n * g(n-1)
g = fact
```

Obviously it is still recursive by nature, if we expand last line:

```js
g = n => n < 2 ? 1 : n * g(n-1)
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

### Real numbers?

Use [Euler’s gamma function](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4247832/)
