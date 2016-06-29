---
title: Composition over Inheritance
layout: post
tags:
  - video
  - functional
  - oop
---

<div class="row">
  <div class="columns medium-6 large-6">
    <p>This is <a href=https://twitter.com/sandimetz>@sandimetz</a>. She is strong OOP advocate (with SmallTalk background) and awesome speaker. In this talk she advocates <b>composition</b></p>
    <div class=flex-video>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OMPfEXIlTVE" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
  <div class="columns medium-6 large-6">
    <p>This is <a href=https://twitter.com/mpjme>@mpjme</a>. He is strong functional advocate (with Haskell background, I guess) and awseome youtube blogger. In this talk he advocates <b>composition</b></p>
    <div class=flex-video>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/wfMtDGfHWpA" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</div>

<blockquote class="attention-grabber">
    <p>It seems to me, that it was never the case of Functional vs Object-oriented.</p>
</blockquote>


## GoF on Inheritance versus Composition

The two most common techniques for reusing functionality in object-oriented systems are class inheritance and object composition. As we’ve explained, class inheritance lets you define the implementation of one class in terms of another’s. Reuse by subclassing is often referred to as white-box reuse. The term “white-box” refers to visibility: With inheritance, the internals of parent classes are often visible to subclasses.

Object composition is an alternative to class inheritance. Here, new functionality is obtained by assembling or composing objects to get more complex functionality. Object composition requires that the objects being composed have well-defined interfaces. This style of reuse is called black-box reuse, because no internal details of objects are visible. Objects appear only as “black boxes.

Inheritance and composition each have their advantages and disadvantages. Class inheritance is defined statically at compile-time and is straightforward to use, since it’s supported directly by the programming language. Class inheritance also makes it easier to modify the implementation being reused. When a subclass overrides some but not all operations, it can affect the operations it inherits as well, assuming they call the overridden operations.

But class inheritance has some disadvantages, too. First, you can’t change the implementations inherited from parent classes at run-time, because inheritance is defined at compile-time. Second, and generally worse, parent classes often define at least part of their subclasses’ physical representation. Because inheritance exposes a subclass to details of its parent’s implementation, it’s often said that “inheritance breaks encapsulation” [Sny86]. The implementation of a subclass becomes so bound up with the implementation of its parent class that any change in the parent’s implementation will force the subclass to change.

Implementation dependencies can cause problems when you’re trying to reuse a subclass. Should any aspect of the inherited implementation not be appropriate for new problem domains, the parent class must be rewritten or replaced by something more appropriate. This dependency limits flexibility and ultimately reusability. One cure for this is to inherit only from abstract classes, since they usually provide little or no implementation.

Object composition is defined dynamically at run-time through objects acquiring references to other objects. Composition requires objects to respect each others’ interfaces, which in turn requires carefully designed interfaces that don’t stop you from using one object with many others. But there is a payoff. Because objects are accessed solely through their interfaces, we don’t break encapsulation. Any object can be replaced at run-time by another as long as it has the same type. Moreover, because an object’s implementation will be written in terms of object interfaces, there are substantially fewer implementation dependencies.

Object composition has another effect on system design. Favoring object composition over class inheritance helps you keep each class encapsulated and focused on one task. Your classes and class hierarchies will remain small and will be less likely to grow into unmanageable monsters. On the other hand, a design based on object composition will have more objects (if fewer classes), and the system’s behavior will depend on their interrelationships instead of being defined in one class.

That leads us to our second principle of object-oriented design:

**Favor object composition over class inheritance.**

Ideally, you shouldn’t have to create new components to achieve reuse.

Design Patterns Elements of Reusable Object-Oriented Software.
Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides

[Sny86] Alan Snyder. Encapsulation and inheritance in object-oriented languages. In Object-Oriented Programming Systems, Languages, and Applications Conference Proceedings, pages 38-45, Portland, OR, November 1986. ACM Press.
