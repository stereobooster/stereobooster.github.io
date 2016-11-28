---
layout: post
title: If Then Else
---

## Functional way e.g. Lambda calculus

```
true = λx.λy.x
false = λx.λy.y
if a then b else c = a b c

For example:
  if true then b else c → (λx.λy.x) b c → (λy.b)c → b
  if false then b else c → (λx.λy.y) b c → (λy.y)c → c
```

### Translate to JavaScript (ES6)

```js
const True = (x) => (y) => x
const False = (x) => (y) => y
const b = 1 // you can use `()=>1` to get more functional attitude
const c = 2

let a = True
a(b)(c) // returns 1

a = False
a(b)(c) // returns 2
```

### Bonus points: Lisp if

```lisp
(if true-or-false-test
    action-to-carry-out-if-the-test-returns-true
  action-to-carry-out-if-the-test-returns-false)
```

Note: [Lisp corresponds to an untyped, call-by-value lambda calculus extended with constants](http://stackoverflow.com/questions/2750421/what-type-of-lambda-calculus-would-lisp-loosely-be-an-example-of).

### Translate to JavaScript (ES6)

```js
const ifThenElse = (test, thenAction, elseAction) => test(thenAction)(elseAction)

ifThenElse(True, 1, 2)  // returns 1
ifThenElse(False, 1, 2) // returns 2
```

## OOP way e.g. SmallTalk/Ruby

Code partially taken from [Yehuda's post](http://yehudakatz.com/2009/10/04/emulating-smalltalks-conditionals-in-ruby/). It is in ruby, which can be considered SmallTalk reincarnation.

```ruby
class TrueClass
  def if_true
    yield
    self
  end

  def if_false
    self
  end
end

class FalseClass
  def if_true
    self
  end

  def if_false
    yield
    self
  end
end

# returns value
if a
  b
else
  c
end

# prints value
(a).
  if_true  { puts b }.
  if_false { puts c }
```

### Translate to JavaScript (ES6)

```js
const True = Object.create({
  ifTrue: (callBack) => {
    callBack.call()
    return this
  },
  ifFalse: (callBack) => {
    return this
  }
})
const False = Object.create({
  ifTrue: (callBack) => {
    return this
  },
  ifFalse: (callBack) => {
    callBack.call()
    return this
  }
})

const b = ()=>{ console.log(1) }
const c = ()=>{ console.log(2) }

let a = True
a.ifTrue(b).ifFalse(c) // prints 1

a = False
a.ifTrue(b).ifFalse(c) // prints 2
```




## Procedural way

```c
#include <stdio.h>

int main () {
  int a = 0;
  if (a == 0) {
    printf("a is zero\n");
  }
  else {
    printf("a is not zero\n");
  }
  return 0;
}
```

Which translated to assembly language as conditional jump:

```asm
      # if (a == 0) {
      cmpl  $0, -4(%rbp) # A CMP(L) instruction performs a subtraction, and throws the value of the result away, while keeping the flags;
                         # which is why you get ZF=1 when the operands are equal and ZF=0 when they're not.
      jne .L2            # Conditional jump when ZF is equal to 0
      # printf("a is zero\n");
      movl  $.LC0, %edi
      call  puts
      # }
      jmp .L3
      # else {
.L2:
      # printf("a is not zero\n");
      movl  $.LC1, %edi
      call  puts
      # }
.L3:
      # return 0;
      movl  $0, %eax
```

### Translate to JavaScript (ES6)

```js
let a = 0
if (a == 0) {
  console.log("a is zero")
} else {
  console.log("a is not zero")
}
// prints result
```

## Boolean algebra

```js
// need dynamic type system or functions return values compatible with boolean
const ifThenElse = (test, thenAction, elseAction) => {
  test && thenAction() || !test && elseAction()
}

ifThenElse(true, ()=>console.log(1), ()=>console.log(2))
// prints 1

ifThenElse(true, ()=>console.log(1), ()=>console.log(2))
// prints 2
```

## Monadic way e.g. Haskell

**Note**: I tried to find example with monads to show same shape of computation, but failed. I left code for historic reason. See also: [If-then-else](https://wiki.haskell.org/If-then-else)

There is [Either](https://hackage.haskell.org/package/category-extras-0.52.0/docs/Control-Monad-Either.html) monad, which is mostly used for error handling, but also will work for if/else semantics. Learn more on monads in Haskell [here](http://learnyouahaskell.com/for-a-few-monads-more).

```haskell
ghci> :t either
either :: (a -> c) -> (b -> c) -> Either a b -> c
```

I do not want to get into Haskell deeply and instead will show JS example. Code taken [here](https://cwmyers.github.io/monet.js/#either).

```js
const True = Either.Right(true);
const False = Either.Left(false);

// Either[E,A].cata(leftFn: E -> X, rightFn: A ->X): X

const b = (success) => 1
const c = (failure) => 2

let a = True
a.cata(c, b) // 1

a = False
a.cata(c, b) // 2
```
