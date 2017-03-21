---
layout: post
title: Type systems
---

Type systems in programming languages is very controversial and confusing theme. There are a lot of misconceptions, myths in this area. Even experts in this area use wrong terminology or spread myths. I will try to clear picture in this post. Some definition are done by me in a different way than I saw in other literature on the subject. I consider this to be innovative approach, which finally makes sense (at least for me).

## Types systems in programming languages — definitions

**Value** — region of memory which can be interpreted as a piece of information. Examples of value: numbers, strings, structures, arrays.

**Variable** — memory address under which you can store value. Examples of variable: variables in programming languages, arguments of functions, return values of a function.

**Untyped** type system — there is only one type, so no need to state, store or check it. Examples: Untyped lambda calculus — everything is functions, untyped assembler languages — everything is bit-strings, untyped ("pure") lisp (everything s-expressions), universal Turing machine.

**Dynamic** type system — only values have types, but not variables. Examples: JavaScript, Ruby.

**Gradual** type system — some variables and all values have types. This is rough definition, see more formal in "Gradual type system" section. Examples: [Facebook Flow](https://flowtype.org/docs/builtins.html), [Python](https://www.python.org/dev/peps/pep-0484/).

**Static** type system — all variables and values have types. Examples: Haskell, Go.

| No type signature   | Has type signature  |
|---------------------|---------------------|
| Untyped             | Gradual             |
| Dynamic             | Static              |

Can effectively check type errors
 - doesn't even bother: untyped 
 - only at runtime: dynamic
 - ahead of runtime: gradual, static

### Dynamic type system

Given definition stating that in dynamic type system values have types. Lets explore this by example (JavaScript ES6):

```js
let a = "abc"
let b = 1
let c = {}
let d = new User()
```

At the first glance there is no "explicit" type specification, but this happens because type specification doen in very specific way:

- double/single quotes specifies string type
- digits specify numeric type
- curly brackets specify hash (or structure) type
- `new` reserved word followed by "identifier", specifies value of type "identifier"

Take a look at [Esprima source code](https://github.com/jquery/esprima/blob/master/src/parser.ts):

```js
switch (token.type) {
  case Token.Identifier:
  case Token.StringLiteral:
  case Token.BooleanLiteral:
  case Token.NullLiteral:
  case Token.NumericLiteral:
  case Token.Keyword:
```

Parser can identify types of values, but not types of variables (in dynamic languages).

### Gradual type system

> some variables and all values have types

Variables which don't have type can be considered of type Top (in terms of type theory). In some PL it is also called Any or Dynamic. Top type is a type which includes all values in the system, topmost set if you consider types as posets (partially ordered sets).

Traditilonally gradual type system considered to be "upgrade" from dynamic type system to more strict type system. Strict means - which enforce more type checks. But there is other way to "get" into this category, by adding Top type to static language. This is not widespreaded opinion.

Examples of "upgrade":

- [Facebook Flow](https://flowtype.org/docs/builtins.html)
- [Python](https://www.python.org/dev/peps/pep-0484/)

Examples of "downgrade":

- C/C++ has type `void *` which can serve as pointer to any type.
- C# has `object` type and C#4 has `dynamic` type

```csharp
object abc;
if(cond1)
{
 Option1 opt1 = new Option1();//opt1 is an object of user defined class Option1
 // Assignment works, but you can't call a method or prop. defined on Option1
 abc = opt1;
} // ...

dynamic abc;
if(cond1)
{
 Option1 opt1 = new Option1();//opt1 is an object of user defined class Option1
 // Assignment works
 abc = opt1;

 // This will work if Option1 has a method Option1Method()!
 // If not, it will raise an exception at run time...
 abc.Option1Method();
} // ...
```

Controversial example:

There is [`Data.Dynamic`](https://kseo.github.io/posts/2014-02-03-data-typeable-and-data-dynamic-in-haskell.html) type, but it is a bit other case, because despite `Dynamic` type Haskell still preserves type safety.

```haskell
> v :: Int
> v = case fromDynamic dyn of
>         Nothing -> error "Type mismatch"
>         Just x  -> x
```

Gradual type system - has Top type and allows to use it in context other than passing around and do type safe casting.


### Strong vs Weak type system

There is no clear definition of this classification. I consider it more confusing than helpful. I strongly discourage usage of this terminology. Every time somebody saying strong or weak type system, ask them for definition.

One of the example of professional literature which mentions this classification (though only in one place) is Type Systems for Programming Languages by Benjamin C. Pierce:

> A useful—though rough—distinction divides the world of programming languages into two parts:
>
>Untyped — programs simply execute flat out; there is no attempt to check “consistency of shapes”
>Typed — some attempt is made, either at compile time or at run-time, to check shape-consistency
>
>Among typed languages, we can break things down further:
>
> |                | Statically checked                          | Dynamically checked |
> |----------------|---------------------------------------------|---------------------|
> | Strongly typed | ML, Haskell, Pascal (almost), Java (almost) | Lisp, Scheme        |
> | Weakly typed   | C, C++                                      | Perl                |


Defintion by [Steve Klabnik](http://blog.steveklabnik.com/posts/2010-07-17-what-to-know-before-debating-type-systems#strong_and_weak_typing):

> Strong typing: A type system that I like and feel comfortable with
> Weak typing: A type system that worries me, or makes me feel uncomfortable

Other source which mentions strong and weak types is "[Types for programmers who know at least one programming language](https://www.destroyallsoftware.com/compendium/types/baf6b67369843fa2)" by Garry Bernhardt.

> The terms "strong" and "weak" are extremely ambiguous. Here are some ways that the terms are used:
>
> - Sometimes, "strong" means "static". That's easy enough, but it's better to say "static" instead because most of us agree on its definition.
>
> - Sometimes, "strong" means "doesn't convert between data types implicitly". For example, JavaScript allows us to say `"a" + 1`, which we might call "weak typing". But almost all languages provide some level of implicit conversion, allowing automatic integer-to-float conversion like `1 + 1.1`. In practice, most people using "strong" in this way have drawn a line between "acceptable" and "unacceptable" conversions. There is no generally accepted line; they're all arbitrary and specific to the person's opinions.
>
> - Sometimes, "strong" means that there's no way to escape the language's type rules.
>
> - Sometimes, "strong" means memory-safe. C is a notable example of a memory-unsafe language. If `xs` is an array of four numbers, C will happily allow code that does `xs[5]` or `xs[1000]`, giving whatever value happens to be in the memory addresses after those used to store xs.


"Type System Power" is other a bit confusing term too which mentioned in the previously mentioned article. It a bit better, than "strong"/"weak" classification because it has more gradations then "strong"/"weak", but still it has some kind of misconception behind it.

Programming languages type system can do different tricks with types:

#### 1. Explicit conversion

This is typically won't be considered as property of type system, but it makes a lot of sense to consider it if you compare dynamic type systems.

JavaScript and PHP allow implicit conversion

```js
1 + "a" // "1a"
1 + []  // "1"
1 + 1.1 // 2.1
```

Ruby allows smaller number of implicit conversions

```ruby
irb(main):001:0> 1 + "a"
TypeError: String can't be coerced into Fixnum
irb(main):002:0> 1 + "a".to_i
1
irb(main):003:0> 1 + []
TypeError: Array can't be coerced into Fixnum
irb(main):004:0> 1 + [].to_i
NoMethodError: undefined method `to_i' for []:Array
irb(main):005:0> 1 + 1.1
2.1
```

> In practice, most people using "strong" in this way have drawn a line between "acceptable" and "unacceptable" conversions. There is no generally accepted line; they're all arbitrary and specific to the person's opinions.

Let's try to draw line here:

1. Every Integer can be converted to Float, but not every Float can be converted to Integer (without some loss). This justifies convertion of Integer to float.

2. Every Integer can be converted to String, but not every String can be converted to Integer. Virtually any value can be can converted to some kind of string representation, though not always sensible.

Other thing which justifies 1-st exmaple, but not the 2-nd one, is the fact that Integer is subset of Float (and Float is subset of Complex, etc). Even more they all share same set of operations due to which conversion can happen, in this case this is plus operation. Here is where line lies for me.

#### 2. Check number of arguments at function call

All statically typed languages can check arguments against function signature, but dynamicly typed languages can maximally check number of arguments.

JavaScript doesn't check

```js
function test (a, b) {} // undefined
test(1) // undefined
```

Ruby checks

```ruby
irb(main):003:0> def test (a, b); end
=> :test
irb(main):004:0> test(1)
ArgumentError: wrong number of arguments (given 1, expected 2)
```

#### 3. Check types of arguments at function call

TODO: example in statically typed and dynamically typed PL

#### 4. Check consistency of a structure

```js
({}).a
undefined
// but
({}).a()
VM1718:1 Uncaught TypeError: (intermediate value).a is not a function
```

```ruby
:005:0> Struct.new(:b).new.a
NoMethodError: undefined method `a' for # <struct b=nil>
# but
irb(main):006:0> {}[:a]
=> nil
irb(main):007:0> {}.fetch(:a)
KeyError: key not found: :a
```

TODO: example in statically typed language
TODO: structural polymorphism, example in GO

#### 5. Deduce type from value or implicitly typed variable

```csharp
var varInt = 7;
// vs
int varInt = 7;
```

In C++11 [auto](http://en.cppreference.com/w/cpp/language/auto)

```cpp
auto a = 1 + 2;
```

TODO: is there a difference between ML and C++/C# type deduction?

#### 6. Exhaustive check

TODO: example in ML or Haskell

#### 7. Array bound checking

[Eliminating Array Bound Checking Through Dependent Types](https://www.cs.bu.edu/~hwxi/academic/papers/pldi98.pdf)

#### 8. Ability to encode effects with type system

TODO: example of Haskell vs [Koka](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/paper-20.pdf)

#### 9. Ability to downgrade/upgrade type depending on usage

TODO: example in Haskell vs Go. See Garry Bernhardt note on types

#### 10. Polymorphic types

TODO: example arrays of different item types, array of different length. See Luca Cardelli pappers

#### 11. Higher order types

See Luca Cardelli pappers

#### 12. Dependent types

TODO: Example in Irdis

#### 12. Formal verification

TODO: Example in F*, totality

#### 13. Dependent types vs Math overflow

TODO: math overflow [An Axiomatic Basis for Computer Programming, C. A. R. Hoare 1969](https://www.cs.cmu.edu/~crary/819-f09/Hoare69.pdf)

#### 14. Forbid null value

https://www.lucidchart.com/techblog/2015/08/31/the-worst-mistake-of-computer-science/

### Refernces 


December 1985 http://lucacardelli.name/Papers/OnUnderstanding.A4.pdf

February 25, 2004, http://lucacardelli.name/Papers/TypeSystems.pdf

1992, https://hal.archives-ouvertes.fr/file/index/docid/70035/filename/RT-0133.pdf

15, 2000 http://ropas.snu.ac.kr/~kwang/520/pierce_book.pdf


TODO: [memory safety](http://www.pl-enthusiast.net/2014/07/21/memory-safety/)
[posets](http://www.maths.qmul.ac.uk/~leonard/designtheory.org/library/encyc/topics/posets.pdf)
Set Theory -> Type theory -> Domain Theory -> Category theory
[A Lightweight Implementation of Generics and Dynamics](https://www.cs.ox.ac.uk/people/ralf.hinze/publications/HW02.pdf)
[CSE341: Programming Languages, Spring 2016](http://courses.cs.washington.edu/courses/cse341/16sp/videos/unit1/)
https://courses.csail.mit.edu/6.042/spring17/mcs.pdf
http://ropas.snu.ac.kr/~kwang/520/pierce_book.pdf
https://www.cs.kent.ac.uk/people/staff/dat/tfp12/tfp12.pdf
http://jaredforsyth.com/type-systems-js-dev/#/17

http://www.uio.no/studier/emner/matnat/ifi/INF5160/h13/timeplan/bock_dependent_types.pdf
https://arstechnica.com/civis/viewtopic.php?f=20&t=750920
http://www.fit.vutbr.cz/study/courses/TJD/public/0708TJD-Peterka.pdf

https://capnproto.org/news/2015-03-02-security-advisory-and-integer-overflow-protection.html

The more tricks type system can do the more powerful it is. But considering the fact that those tricks attribute to different areas, it doesn't makes sense to measure power just by counting them.

## Sound, Unsound, Complete, Incomplete

## Type errors

What is error - programm behaves in unexpected way.
Typer error is - when you try to apply operation to an approriate type.

static- syntax, type errors

Dynamic type error - error occurs at runtime.

Example: Ruby (TypeError: String can't be coerced into Fixnum), JavaScript (Uncaught TypeError: Cannot read property '...' of undefined)

Static type error - error occurs at preprocessing time whether this is compiling or just static analysis

Example: Haskel, C

TODO: is there language that has both dynamic and static type errors?

Dynamic type errors correspond to unsound type system?

The question is that not every dynamic error is type error.

Sound type system can mathematically proof that there are no type errors. The question is what are errors that are outside of type errors scope.

Effects - IO fails, resource allocation fail, mathematical operation not permited, lose of precision
memory fragmentation error, wrog memory access
paralel procces memory access - pi-calculus


Functional
	referential transparency
		immutable data structures
		pure functions
			side effects
			deviation
			totality
	first class functions
	recursive functions
		tail call optimization


Typed functional

types
reactivity

pure functions vs IO

IO::output -> just add output to IO pool
IO::input

functional -> program is function, which starts and ends

effects
	pure vs total

https://eschew.wordpress.com/2009/08/31/sound-and-complete/
http://www.brandonbloom.name/blog/2014/01/08/unsound-and-incomplete/
http://io.livecode.ch/learn/namin/unsound

http://homepages.inf.ed.ac.uk/gdp/publications/cbn_cbv_lambda.pdf
http://www.cs.unibo.it/~martini/papers-to-ftp/Cie-revised.pdf

https://www.cs.kent.ac.uk/people/staff/dat/tfp12/tfp12.pdf
http://inst.eecs.berkeley.edu/~etzeng/mt1/part3.txt

Static, but not dynamic?




https://tonyarcieri.com/an-open-letter-to-matz-on-ruby-type-systems
https://github.com/antoniogarrote/typed.rb
https://github.com/dry-rb/dry-types
http://blog.codeclimate.com/blog/2014/05/06/gradual-type-checking-for-ruby/
https://codon.com/consider-static-typing
http://disi.unitn.it/~bernardi/RSISE11/Papers/curry-howard.pdf




## I'm using statically typed language, so I do not have bugs right?

Wrong. Bugs are errors in program behavior.

Example: specification says you need to add WAT to final price, but instead you subtract it. See pseudo-code bellow. From type system point of view everything is correct.

```
function final_price(price: decimal, wat: decimal): decimal {
	return price - wat
}
```


## I'm using statically typed language, so I do not have errors right?

Wrong. Not all (dynamic or run-time) errors are type errors.

Example: when you will try to add two integers which will result in overflow. From type system point of view everything is correct - you are adding two numbers of the same type, addition permitted for numbers.


## I'm using statically typed language, so I do not have type errors right?

Wrong. It is only true if your type system is sound.

Example: unsound Java, sound Java core


## Pff... what is the sense of type system then?

Depending on type system cleverness you can get more benefits out of it:

### The simplest case: types match operations

Ruby (TypeError: String can't be coerced into Fixnum), JavaScript (Uncaught TypeError: Cannot read property '...' of undefined)

### Exhaustive check

Example: TODO

### Effects

### Effects: exception

Encoding exceptions as effects plus exhaustive check you will never make an error with unhandeled exception.

### Effects:

random : () → ndet double
print : string → io ()
error : ∀α. string → exn a
(:=) : ∀α. (refhh,ai, a) → writehhi ()

alias total = hi
alias pure = hexn, divi
alias sthhi = hallochhi, readhhi, writehhii
alias io = hsthioheapi, pure, ndeti

















