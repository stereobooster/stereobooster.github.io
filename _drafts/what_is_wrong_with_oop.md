# What it takes to be a OOPL?

The goal of this article to define OOPL in minimal requirements e.g. if you eliminate any of this requirement it won't be OOPL any more. The second aim is to give all termins clear definitions.

On the other hand I can not just redefine existing pardigm with new meaning. I will derive my definitions from existing definitions and will try to find common features.

Lets see some most notable (from my POV) definitions of OOP:

...

## Shortenings

- Struct - any `associative array`-like structure. "Struct" in C; "Map" in Java, C++; "Dictionary" in .Net, Python; "Associative array" in Javascript, PHP.
- PL - programming language
- OO - Object oriented
- OOPL - Object oriented programming language
- FP - functional programming
- JS - JavaScript or ECMAScript

## Object

Clearly you need objects for OOP. What is object? What is minimal requirements for object? Can struct be treated as an object?

### Fileds

Object is collection of fields where it can store its state. Struct clearly able to do this too.

### Methods

Object is collection of methods which is used to interact with object. If PL supports first class functions you can "equip" struct with "metods".

Methods are able to refer host object. Some ways to solve this problem for structs:
  - [closures](https://youtu.be/CQqwU2Ixu-U), if PL supports it
  - convention
  - dynammic resolve of self-reference. This what JS does with `this` keyword.

Solution with closures. Example in JavaScript (ES5):

```javascript
function construct() {
  var self = {
    state: true,
    getState: function() {
      return self.state;
    },
  };
  return self;
}

construct().getState();
```

Solution with conventions. Convention is simple: always pass host object as a first argument of a function.

Example in JavaScript (ES5):

```javascript
var obj = {
  state: true,
  getState: function(self) {
    return self.state;
  },
};

function send(obj, method, payload) {
  return obj[method](obj, payload);
}

send(obj, "getState");
```

Example in Rust:

```rust
struct Obj {
  state: bool,
}

impl Obj {
  fn get_state(&self) -> bool {
    self.state
  }
}

fn main() {
  let obj = Obj { state: true };
  obj.get_state();
}
```

### Encapsulation

Objects are able to hide its internals e.g. private variables and functions. This is called encapsulation. To fulfil this requirement for structs we will need closures or support from language.

Example in JavaScript (ES5):

```javascript
function construct() {
  var privateMethod = function () {};
  // private variable
  var self = {
    state: true,
  };

  return {
    getState: function() {
      privateMethod();
      return self.state;
    },
  };
}

construct().getState();

```

Example in Rust:

```rust
mod my {
  pub struct Obj {
    state: bool,
  }

  impl Obj {
    fn private_method(&self) -> bool {
      self.state
    }

    pub fn get_state(&self) -> bool {
      self.private_method()
    }

    pub fn new(state: bool) -> Obj {
      Obj {
        state: state,
      }
    }
  }
}

fn main() {
  let obj = my::Obj::new(true);
  obj.get_state();
}

```

"Pure" encapsulation (pure as 100%) - when encapsulation is requirement not an option e.g. all internals of object is always hidden only methods exposed, all interactions with object going through method calls no direct access to fields allowed.

In this sense SmallTalk and Ruby have pure encapsulation. C++ and JavaScript don't have pure encapsulation.

Alan Kay refers to pure encapsulation in this sentence: "Objects communicate by sending and receiving messages (in terms of objects)".

### Messages

What differs method call from message sending (recieving)? Message sent to an object will eventually call method (function) or return an error if there is no function which can respond to a message. Semantically there is not much difference between message sending and method call. Implemention though can be different:

 - Message sending can be thought as late binding mechanism.
 - Message sending can be thought as the ability to invoke method of an object on completley different computer (RPC).
 - Method call can be thought as early binding mechanism.

So if you not consider late binding as requirement for OOP you can think of message sending as method call and vice versa. I do not see yet why late binding should be considered as requirement for OOP.

## Classes

Are classes required for OOP? What is the class?

### Constructor

Class is the way to declare structure and methods of an object to be able to construct object with similar structure. Alternative ways to do it are:

  1. Prototypes. Use one object as the reference for constructing other objects. Prototypes were introduced in Self. See [Self: The Power of Simplicity, 1987](http://www.cs.ucsb.edu/~urs/oocsb/self/papers/self-power.html).
  2. Constrcutor functions (factory pattern is related concept). Use function to construct similar objects.

In PL with manual memory management constructor also responsible for memory allocation, and also possible to declare destructor which would be responsible for freeing memory.

### Type definition

Type matters only if PL does type checking. If PL does type checking then struct type definition can be used too for this purpose.

### Class inheritance as interface

Ability to use objects of different types interchangebly without need to change code is called subtyping polymorphism, according to "[On Understanding Types, Data Abstraction, and Polymorphism, 1985](http://citeseer.ist.psu.edu/viewdoc/download?doi=10.1.1.117.695&rep=rep1&type=pdf)".

We need this type of polymorphism only if PL has static type system. If PL has dynamic type system we can achieve the same behaviour without subtyping polymorphism. See "Polymorphism" section for more details.

Other interesting worth to mention is that structural subtyping is not the same as class inheritance. See [inheritance is not subtyping, 1990](http://dl.acm.org/citation.cfm?id=96721) for details. But still both of it are subtype polimorphism mechanism in classification of Cardeli.

[Go interfaces](http://jordanorelli.com/post/32665860244/how-to-use-interfaces-in-go) is good exaplme of structural subtyping.

### Class inheritance for code reuse

Is inheritance the only one way to do code reuse in OOP? Well known alternative to inheritance as the way to do code reuse is composition. Composition is not solely OOP concept, it comes from FP, where programs written by composing function.

## Polymorphism

What is polymorphism? What are different types of polymorphism?

Polymorphic functions are functions whose parameters can have more than one type.
Polymorphic types are types whose operations are applicable to values of more than one type.

```
----------------[Strachey, 1967]-----------------    ----[Milner, 1978]-------------

                  +-- parametric -------------------- Hindley-Milner type inference
  polymorphism ---+
                  +-- ad-hoc

----------------[Cardelli, 1985]-----------------    ----[Moez, 2011]---------------
                                  +-- parametric
                  +-- universal --+                     +-- COOP
                  |               +-- inclusion --------+-- SOOP structured
  polymorphism ---+                                     +-- NOOP nominal (classes)
                  |               +-- overloading
                  +-- ad-hoc -----+
                                  +-- coercion
```

- Fundamental Concepts in Programming Languages [Strachey, 1967](http://www.itu.dk/courses/BPRD/E2013/fundamental-1967.pdf)
- A Theory of Type Polymorphism in Programming [Milner, 1978](http://homepages.inf.ed.ac.uk/wadler/papers/papers-we-love/milner-type-polymorphism.pdf)
- On Understanding Types, Data Abstraction, and Polymorphism [Cardelli, 1985](http://citeseer.ist.psu.edu/viewdoc/download?doi=10.1.1.117.695&rep=rep1&type=pdf)
- NOOP A Mathematical Model Of Object-Oriented Programming [Moez, 2011](https://scholarship.rice.edu/bitstream/handle/1911/70199/Abdel-GawadM.pdf?sequence=1)

Polimorphism is not solely OOP concept. I consider polymorphism to be requirement for any modern PL.

Other papers:

- A Behavioral Notion of Subtyping [Liskov, 1994](https://www.cs.cmu.edu/~wing/publications/LiskovWing94.pdf)
- On Understanding Data Abstraction, Revisited [Cook, 2009](http://www.cs.utexas.edu/~wcook/Drafts/2009/essay.pdf)

### Prototypes as alternative to classes

- Self: The Power of Simplicity [Ungar, 1987](http://www.cs.ucsb.edu/~urs/oocsb/self/papers/self-power.html)
- Organising Programs Without Classes [Ungar, 1991](http://cs.au.dk/~hosc/local/LaSC-4-3-pp223-242.pdf)

## Beyond single inheritance

### Multiple inheritance, Interface, Traits, Mixins

- Traits: An Approach to Multiple-Inheritance Subclassing. [Curry, 1982]
- https://www.cs.cmu.edu/~aldrich/courses/819/Scha03aTraits.pdf
- https://newtraell.cs.uchicago.edu/files/tr_authentic/TR-2003-13.pdf
- http://people.cs.uchicago.edu/~jhr/papers/2004/fool-traits.pdf
- http://scg.unibe.ch/archive/papers/Scha02cTraitsModel.pdf

- [Classes and Mixins, 1997](https://cs.brown.edu/~sk/Publications/Papers/Published/fkf-classes-mixins/)









