---
layout: post
title: Error handling
---

## Type of errors by nature

Notice: this classification lacks of formal proof. While first two categories clearly defined, other is more hand-wavy explained and contains all errors, that are not fail in first two categories.

### Undefined value

Humankind doesn't know answers to those questions yet. Generally possible those questions are undecidable.

Example: division by zero, factorial of negative number, etc.



### Hardware error

Errors caused by limitations of machine implementation.

Example: integer overflow, loss of significance in floating point arithmetic, not enough memory error, stack overflow, etc.

### Programmer level error

Example: network error, disk error, timeout error, interruption.

### User level error

Errors caused by interaction of user with a system. Generally expected that system can not be brought in error state with user input. Good system expected to prevent user errors and give user explanations on how to fix the error, but this is more question of usability rather than computability.

Example: wrong file format, text input instead of number.

## Type of errors by predictability

### Predictable

Errors that will always happen. Think of analogue for notation of function purity for errors.

Example: division by zero will always lead to error.

### Unpredictable

Errors that can potentially happen at run time.

Example: network error.

## Error handling strategies

### Ignore

Consciously or unconsciously error ignored by programmer. In this case system can still be usable or unusable. In some cases it leads to glitches, security holes, hardware damage or even death threat. Not user friendly, can lead to constantly broken state, for example if error occurs inside database transaction.

<iframe src="//giphy.com/embed/5TyoKeWB7OCf6" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

### Panic

The simplest solution to prevent undefined system behavior or hardware damage is to shutdown system at all. Not user friendly, can lead to constantly broken state, for example if error occurs inside database transaction.

### Graceful error handling

In case of error system not able to finish desired action, but system will not get in error state, and user will be informed about the error. This method not always guarantee usability, because error messages can be cryptic, or system still need to be restarted.

### Other notes

Lack of error logging can lead to difficulties in debugging.

Sometimes showing error messages to user can lead to security holes.

## Error handling from syntax point of view

### Exception

In some sense [exceptions share traits of `GOTO`](/goto-vs-excetions) - it can jump to unobvious part of code.

[Joel Spolsky about exceptions](http://www.joelonsoftware.com/items/2003/10/13.html).

From [google c++ guide](https://google.github.io/styleguide/cppguide.html#Exceptions):

Pros:

- Exceptions allow higher levels of an application to decide how to handle "can't happen" failures in deeply nested functions, without the obscuring and error-prone bookkeeping of error codes.
- Exceptions are used by most other modern languages. Using them in C++ would make it more consistent with Python, Java, and the C++ that others are familiar with.
- Some third-party C++ libraries use exceptions, and turning them off internally makes it harder to integrate with those libraries.
- Exceptions are the only way for a constructor to fail. We can simulate this with a factory function or an Init() method, but these require heap allocation or a new "invalid" state, respectively.
- Exceptions are really handy in testing frameworks.

Cons:

- When you add a throw statement to an existing function, you must examine all of its transitive callers. Either they must make at least the basic exception safety guarantee, or they must never catch the exception and be happy with the program terminating as a result. For instance, if f() calls g() calls h(), and h throws an exception that f catches, g has to be careful or it may not clean up properly.
- More generally, exceptions make the control flow of programs difficult to evaluate by looking at code: functions may return in places you don't expect. This causes maintainability and debugging difficulties. You can minimize this cost via some rules on how and where exceptions can be used, but at the cost of more that a developer needs to know and understand.
- Exception safety requires both RAII and different coding practices. Lots of supporting machinery is needed to make writing correct exception-safe code easy. Further, to avoid requiring readers to understand the entire call graph, exception-safe code must isolate logic that writes to persistent state into a "commit" phase. This will have both benefits and costs (perhaps where you're forced to obfuscate code to isolate the commit). Allowing exceptions would force us to always pay those costs even when they're not worth it.
- Turning on exceptions adds data to each binary produced, increasing compile time (probably slightly) and possibly increasing address space pressure.
- The availability of exceptions may encourage developers to throw them when they are not appropriate or recover from them when it's not safe to do so. For example, invalid user input should not cause exceptions to be thrown. We would need to make the style guide even longer to document these restrictions!

### Error as return value

#### Precedence of maybe monad

**Null pointer**

[The inventor, Tony Hoare, has this to say about it](https://www.infoq.com/presentations/Null-References-The-Billion-Dollar-Mistake-Tony-Hoare):

I call it my billion-dollar mistake. It was the invention of the null reference in 1965. At that time, I was designing the first comprehensive type system for references in an object oriented language (ALGOL W). My goal was to ensure that all use of references should be absolutely safe, with checking performed automatically by the compiler. But I couldn't resist the temptation to put in a null reference, simply because it was so easy to implement. This has led to innumerable errors, vulnerabilities, and system crashes, which have probably caused a billion dollars of pain and damage in the last forty years.


Note: do not confuse with void pointer.

See:

 - [Nullable types](https://en.wikipedia.org/wiki/Nullable_type)
 - [C Null pointer](http://c-faq.com/null/)

**Undefined, Null as no value**

See:

 - [Unit type](https://en.wikipedia.org/wiki/Unit_type#In_programming_languages)
 - [Null object](https://rosettacode.org/wiki/Null_object)
 - [Undefined values](https://rosettacode.org/wiki/Undefined_values)
 - [Null object pattern](https://en.wikipedia.org/wiki/Null_Object_pattern)
 - [Nothing is Something by Sandi Metz](https://youtu.be/29MAL8pJImQ)
 - [Null in SQL](https://en.wikipedia.org/wiki/Null_(SQL))

#### Maybe monad

Typical usage: function can return value or one type of error.

Example: first item of a list (`head`), n-th item of array, position of element in array which in case of element absence will return -1.

In different languages: [rust (Option)](https://doc.rust-lang.org/std/option/), [elm](http://package.elm-lang.org/packages/elm-lang/core/3.0.0/Maybe), [haskell](https://hackage.haskell.org/package/base-4.9.0.0/docs/Data-Maybe.html), [other in wikipedia](https://en.wikipedia.org/wiki/Option_type)

See also:

 - [Null vs Maybe Monad](https://www.lucidchart.com/techblog/2015/08/31/the-worst-mistake-of-computer-science/)

#### Result monad variation

**NaN, Infinity**

See:

 - [754-2008 - IEEE Standard for Floating-Point Arithmetic](http://www.csee.umbc.edu/~tsimo1/CMSC455/IEEE-754-2008.pdf)
 - [Decimal arithmetic](http://speleotrove.com/decimal/)

**Result-error tuple**

See: [Go style error handling](https://blog.golang.org/errors-are-values)

**RPC**

Example: JSON/XML RPC

#### Result monad

Typical usage: function can return value or more than one type of error. Error object can contain error message, error code or other data to recover from it.

In different languages: [elm](http://package.elm-lang.org/packages/elm-lang/core/2.1.0/Result), [rust](https://doc.rust-lang.org/beta/std/result/), [haskell (Either - not sure on that)](https://hackage.haskell.org/package/base-4.9.0.0/docs/Data-Either.html), [scala (Try)](http://www.scala-lang.org/api/2.9.3/scala/util/Try.html)

#### Promise monad: async error handling

Typical usage: the same as result monad except that data becomes available through time.

In different languages: [elm (Task)](http://package.elm-lang.org/packages/elm-lang/core/3.0.0/Task), [rust (Future)](https://doc.rust-lang.org/1.2.0/std/sync/struct.Future.html), [haskell (Promise)](https://hackage.haskell.org/package/promises-0.3/docs/Data-Promise.html)

## Errors vs type system

### Errors that can be prevented

Assume we have dependent type language, like [idris](http://www.idris-lang.org/), than we can say that division operation defined for all numeric divisor except zero. So compiler will complain if you would try to pass in all numeric values.

```idris
--- example from idris https://github.com/idris-lang/Idris-dev/blob/master/libs/prelude/Prelude/Nat.idr
--- Division where the divisor is not zero.
--- Note: Z stands for Zero, definition follows Peano
divNatNZ : Nat -> (y: Nat) -> Not (y = Z) -> Nat
```

So if you have some function

```haskell
someNumber :: a -> Nat
let x = someNumber(123)
1/x
^
| --- This produce type error: expected Nat (Not = Z), got Nat
```

To make compiler happy:

```haskell
if (x == 0) then
  --- handle bad case
else
  1/x
```

### Errors that need to be handled

`Result monad` plus `exhaustive checking` will spot if you are not handling all error cases

```
view address model =
    case model of
        Result.Ok i  -> div [] [ text <| toString i ]
        ^
        |-------- Exhaustive check failed: not all cases are handled
```

To make compiler happy:

```
view address model =
    case model of
        Result.Ok i  -> div [] [ text <| toString i ]
        Result.Err m -> div [] [ text <| errorMapper m ]
```

## Other resources

- [Railway oriented programming](https://fsharpforfunandprofit.com/posts/recipe-part2/)
- [The Error Model](http://joeduffyblog.com/2016/02/07/the-error-model/)
- [8 ways to report errors in Haskell revisited](http://blog.ezyang.com/2011/08/8-ways-to-report-errors-in-haskell-revisited/)
- [Advances in Exception Handling Techniques. Alexander Romanovsky, Christophe Dony, Jørgen Lindskov Knudsen, Anand Tripathi(Eds.)](https://ia800209.us.archive.org/30/items/springer_10.1007-3-540-45407-1/10.1007-3-540-45407-1.pdf)
