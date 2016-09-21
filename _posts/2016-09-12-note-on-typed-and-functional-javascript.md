---
layout: post
title: Note on typed and functional JavaScript
---

## Dynamic type system

### Dynamic type system: ES6 almost LISP (Scheme)

Given the fact that [ES6](http://exploringjs.com/es6/) has dynamic type system, higher order functions (e.g. functions which can accept and/or return other function), [tail call optimisation](http://benignbemine.github.io/2015/07/19/es6-tail-calls/) (`TCO`), brings ES6 to level of LISP (Scheme).

[First time this idea was suggested by Douglas Crockford](http://javascript.crockford.com/little.html). But Crockford suggested it when there were no `TCO` in standard.

With `TCO` and `fat arrow` (`=>`) ES6 become closer to  LISP (in some aspects) e.g. you can take [SICP](http://sarabander.github.io/sicp/) and implement all examples using ES6. Yay!

Side note: there exist variations of LISP with static type system, but historically LISP was dynamically typed.




### Dynamic type system plus immutable data structures: Clojure

Firs of all there is [ClojureScript](http://clojurescript.org/) which will transpile Clojure (with some restrictions) to JS.

Or you can use ES6 together with immutable [(functional) data structure](https://www.cs.cmu.edu/~rwh/theses/okasaki.pdf), for example [mori](https://github.com/swannodette/mori) (which come from ClojureScript) or [Immutable.js](https://facebook.github.io/immutable-js/).

Side note: using ES6 with immutable data structures is not the same as using ClojureScript, it is some kind of equivalent.

## Static type system: JavaScript with types

There are two big players in this field: Flow and TypeScript. Both of those systems not "sound" for the same reason: structural subtyping. Take a look this video with creators of both systems: [Typed JavaScript with TypeScript and Flow](https://javascriptair.com/episodes/2016-08-31/).

I believe one of the sell points for those systems is ease of integration with existing JS ecosystem. To be able to do this you need to add type description to existing code. There are community-driven repositories of description files. It would be cool if there would be some kind of interportability between formats, so they can be shared. As of now type systems are bit different.

### Flow

[Flow](https://flowtype.org/) is a static type checker for JavaScript by Facebook.

Sound: no.

> Flow supports this idiom. As far as we know, this is a type system novelty: supporting this idiom while balancing other constraints of the type system, such as sound subtyping over objects and prototypes, can be quite tricky!
> [Flow Object](https://flowtype.org/docs/objects.html)

[Simple FFI e.g. description (header) files](https://flowtype.org/blog/2015/02/18/Import-Types.html): Yes. Repository: [flow-typed](https://github.com/flowtype/flow-typed/tree/master/definitions/npm)

There is no standard higher kind library, but there is [flow-static-land](https://github.com/gcanti/flow-static-land), which looks promising.

### TypeScript

[TypeScript](https://www.typescriptlang.org) is JavaScript superset with types by Microsoft.

Sound: no. See: [type compatibility](https://www.typescriptlang.org/docs/handbook/type-compatibility.html)

Simple FFI e.g. description (header) files: Yes. Repository: [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

## Static type system: Raise of ML languages

There is interesting tendency: raise of ML-family (closer to OCaml) languages which can be transpiled to JS. One of the most intriguing is BuckleScript, which is able to transpile OCaml.

**OCaml** - mature functional language with safe type system.

- [BuckleScript](https://github.com/bloomberg/bucklescript) is a backend for OCaml which emits readable, modular and highly performant JavaScript. Human-readable output.
- [Reason](https://facebook.github.io/reason/) is a new interface to OCaml - a highly expressive dialect of the ML language featuring type inference and static type checking. It has more familiar appearance for JavaScript programmers.

**F#**

[Fable](https://fable-compiler.github.io/) optimizes F# code to generate as clean JavaScript as possible. It comes with a tiny core library (around 20KB minified and gzipped) and no other runtime.

On the other side there are also new languages. Which fails in ML-family too (OCaml/Haskell).

**[Elm](http://elm-lang.org/)** Generate JavaScript with great performance and no runtime exceptions. [Comparison to ML and Haskell](https://groups.google.com/forum/#!topic/elm-discuss/-d5WEmDi5QI). Pros: explicitly handles effects, immutable, fantastic error messages. Cons: need to write special code to wrap existing JS libraries (I would call it complex FFI).

**[PureScript](http://www.purescript.org/)** is a small strongly typed programming language that compiles to JavaScript. Features: human-readable output, extensible effects, algebraic data types, higher kinded types, simple FFI (at least that's what it is promising) and many more.

## Other

There is also [Dart](https://www.dartlang.org/), of which I do not know much. Does anybody else than Google use it?

## Links

- [Typed Functional Programming in JavaScript](https://javascriptair.com/episodes/2016-08-03/)
- [Fantasy Land Specification](https://github.com/fantasyland/fantasy-land) - Specification for interportability of common algebraic structures in JavaScript.
- [Static Land](https://github.com/rpominov/static-land) - Specification for common algebraic types in JavaScript based on Fantasy Land.
- [Functional Programming Jargon](https://github.com/hemanth/functional-programming-jargon) -
Jargon from the functional programming world in simple terms!
- [Universal utils](https://github.com/matthiasak/universal-utils) - Small functional problem-solving, event, state-management, and caching utilities.
- [Source for "Haskell in ES6" article series](https://github.com/casualjavascript/haskell-in-es6)
- [Wiki: how to compile Haskell into JavaScript](https://wiki.haskell.org/The_JavaScript_Problem)
- [Streams handbook](https://github.com/substack/stream-handbook)
- http://learnyouahaskell.com/
- https://realworldocaml.org/
- http://learnyousomeerlang.com/


|                      | Type System | Immutability | Sound | ADT | Effects | Simple FFI | FFI Definitions/Packages | Human readable output | Server |
|----------------------|-------------|--------------|-------|-----|---------|------------|--------------------|-----------------------|----|
| ES6                  | Dynamic     | No           | -     | -   | -       | -          | -                  | ?                     | Yes|
| ClojureScript        | Dynamic     | Yes          | -     | -   | -       | ?          | ?                  | ?                     | Yes|
| Flow                 | Static      | No           | No    | Yes | ?       | Yes        | 117 [flow-typed](https://github.com/flowtype/flow-typed/tree/master/definitions/npm), [flowInterfaces](https://github.com/marudor/flowInterfaces) | ?                     | Yes|
| TypeScript           | Static      | No           | No    | Yes | ?       | Yes        | 2,073 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) | ?                     | Yes|
| OCaml (BuckleScript) | Static      | ? No         | Yes   | Yes | ?       | Yes        | ~4 + ? [bindings](https://github.com/bloomberg/bucklescript-addons/tree/master/bindings) | Yes                   | Yes|
| F# (Fable)           | Static      | No           | ? Yes | Yes | ?       | ?          | ?                                         | ?                     | ? |
| Elm                  | Static      | Yes          | ? Yes | Yes | Yes     | No         | ? [package](http://package.elm-lang.org/) | ?                     | ? No |
| PureScript           | Static      | ? Yes        | ? Yes | Yes | Yes     | Yes        | 212 [pursuit](https://pursuit.purescript.org/)| Yes                   | ? |

 - Immutability - if immutability is the feature of language
 - Sound - [type soundness](http://papl.cs.brown.edu/2014/safety-soundness.html)
 - ADT - Algebraic data types
 - Effects - if type system takes into account side effects
 - Simple FFI - it is enough to describe function signatures to use third-party JavaScript code. No need for additional boilerplate code
 - FFI Definitions/Packages - number of third-party packages in repository
 - Human readable output - if output of transpiler is JavaScript module which you can easily use in JavaScript, if variables mangled
 - Server - if it is possible to use on server-side


