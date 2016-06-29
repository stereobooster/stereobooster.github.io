---
layout: post
title: Two big schools of Object-Oriented Programming
image:
  twitter: /assets/posts/two-big-schools-of-object-oriented-programming/oop-is.png
  facebook: /assets/posts/two-big-schools-of-object-oriented-programming/oop-is.png
tags:
  - programming
---

**TL;DR** There is no one "canonical" definition of OOP. There are **at least two** of them. From **my POV** there are two big definitions, which deserves separate names. I named them after biggest advocates. Those two definition have some differences and some commonalities.

I was about to get into another argue on OOP on the internet. I decided to do some research on the subject. I found [more than one definition of OOP](http://c2.com/cgi/wiki?DefinitionsForOo). Some of the definitions are variations of the same "tune", some are useless. On my opinion there are two main directions of thoughts in this domain, which from two schools of OOP. School as in [school of thought](https://en.wikipedia.org/wiki/School_of_thought). The same way as there were [philosophical schools in ancient Greece](https://en.wikipedia.org/wiki/Ancient_Greek_philosophy). The same way there are two schools of OOP:

 - Alan Kay's school or message focused
 - Bjarne Stroustrup's school or class focused or "PolymorphismEncapsulationInheritance" in terms of [c2](http://c2.com/cgi/wiki?DefinitionsForOo)

 **I must emphasize that this article is not about what is best way to do OOP**, because such discussion will lead to holy war. Instead purpose of this article is to help to recognize the fact that **there are two ways to think about OOP**. I believe this will help to build more constructive discussions about OOP. Next time you will start discussion on OOP or OOP vs <put your paradigm here> make sure you know which school of OOP you are talking about.

## About names

I choose Alan Kay and Bjarne Stroustrup as founders of schools, because they are big advocates of OOP and authors of first OOP languages of each school correspondingly. I'm aware that there are arguments on which programming language is the first OOP language and who invented OOP. See history section.

<div class="row">
  <div class="columns medium-6 large-6">
    <h3>Kay's school</h3>
    <p><img src="/assets/posts/two-big-schools-of-object-oriented-programming/alan-kay.png"></p>
  </div>
  <div class="columns medium-6 large-6">
    <h3>Stroustrup's school</h3>
    <p><img src="/assets/posts/two-big-schools-of-object-oriented-programming/bjarne-stroustrup.png"></p>
  </div>
</div>


## Advocates

<div class="row">
  <div class="columns medium-6 large-6">
    <h3 class="show-for-small-only">Kay's school</h3>
    <p><a href="https://en.wikipedia.org/wiki/Alan_Kay">Alan Kay</a> one of authors of SmallTalk, <a href="https://www.youtube.com/watch?v=29MAL8pJImQ">Sandi Metz</a> OOP advocate in Ruby world.</p>
  </div>
  <div class="columns medium-6 large-6">
    <h3 class="show-for-small-only">Stroustrup's school</h3>
    <p><a href="https://www.youtube.com/watch?v=JBjjnqG0BP8">Bjarne Stroustrup</a> author of C++, <a href="https://en.wikiquote.org/wiki/Grady_Booch">Grady Booch</a> author of UML</p>
  </div>
</div>

## Programming Languages

<div class="row">
  <div class="columns medium-6 large-6">
    <h3 class="show-for-small-only">Kay's school</h3>
    <p>SmallTalk, Ruby</p>
  </div>
  <div class="columns medium-6 large-6">
    <h3 class="show-for-small-only">Stroustrup's school</h3>
    <p>C++, Java</p>
    <p>See also: <a href="http://www.gotw.ca/publications/c_family_interview.htm">The C Family of Languages: Interview with Dennis Ritchie, Bjarne Stroustrup, and James Gosling</a></p>
  </div>
</div>

## Definition

<div class="row">
  <div class="columns medium-6 large-6">
    <h3 class="show-for-small-only">Kay's school</h3>
    <blockquote>
    <p><ol>
    <li>Everything is an object.</li>
    <li>Objects communicate by sending and receiving messages (in terms of objects).</li>
    <li>Objects have their own memory (in terms of objects).</li>
    <li>Every object is an instance of a class (which must be an object).</li>
    <li>The class holds the shared behavior for its instances (in the form of objects in a program list).</li>
    <li>To eval a program list, control is passed to the first object and the remainder is treated as its message.</li>
    </ol></p>
    <p><a href="http://worrydream.com/EarlyHistoryOfSmalltalk/">The Early History Of Smalltalk</a></p>
    </blockquote>

    <blockquote>
    <p>This definition is derived from early versions of SmallTalk (SmallTalk-72?), and rules 5 and 6 clearly show SmallTalk's Lisp heritage. Kay remarked as such, noting that rules 4-6 would mutate as SmallTalk developed.</p>
    <p><a href="http://c2.com/cgi/wiki?AlanKaysDefinitionOfObjectOriented">Alan Kays Definition Of Object Oriented</a></p>
    </blockquote>

    <p>Other note which emphasize messaging:</p>

    <blockquote>
    <p>OOP to me means only messaging, local retention and protection and hiding of state-process, and extreme late-binding of all things. It can be done in SmallTalk and in LISP. There are possibly other systems in which this is possible, but I’m not aware of them.</p>

    <p><a href="http://mythz.servicestack.net/blog/2013/02/27/the-deep-insights-of-alan-kay/">The Deep Insights of Alan Kay, 2013</a></p>
    </blockquote>
  </div>
  <div class="columns medium-6 large-6">
    <h3 class="show-for-small-only">Stroustrup's school</h3>
    <blockquote>
    <p>Given these general criteria for a definition of &quot;object-oriented&quot; you can find several plausible candidates, and several communities have their own definitions. However, I suggest we stick to the traditional definition of object-oriented used within broad communities of programmers. A language or technique is object-oriented if and only if it directly supports:</p>
    <p><ol>
    <li>Abstraction – providing some form of classes and objects.</li>
    <li>Inheritance – providing the ability to build new abstractions out of existing ones.</li>
    <li>Run-time polymorphism – providing some form of run-time binding.</li>
    </ol></p>

    <p><a href="http://www.stroustrup.com/oopsla.pdf">Bjarne Stroustrup, Why C++ is not just an Object-Oriented Programming Language</a></p>
    </blockquote>

    <p>See also: <a href="http://www.stroustrup.com/whatis.pdf">What is &quot;Object-Oriented Programming&quot;? (1991 revised version)</a></p>
  </div>
</div>

## What is the right definition?

This question will still arise, so I'm feel it would be right to give my opinion before holy war started.

> Alan Kay invented term "object oriented", SmallTalk appears earlier, so his definition is the "canonical", right?

Short answer: this is wrong question to ask. Alan Kay coined the term (I do not like word "invented" in this context) and theory behind it. Stroustrup used the same term (maybe not he, maybe it was media fuss, maybe it was done unintentionally) and gave it other definition. No reason to get crazy about this. Happened millions time before:

- [Hawking's singularity](https://en.wikipedia.org/wiki/Penrose%E2%80%93Hawking_singularity_theorems) term was shadowed by [Kurzweil's singularity](https://en.wikipedia.org/wiki/Technological_singularity). And some physicists still mad about it.
- [Some cover songs are more famous than originals](http://www.huffingtonpost.com/2013/04/22/cover-songs-more-famous-than-originals-20-tunes_n_3118557.html)

And as of now there are a lot of people who follows one or another school. So it would make **not** much sense to say that some of definition is better because it was invented first or have more followers. The only reasonable thing we can do is to give them proper names and not confuse with each other.

## Differences between definitions

<div class="row">
  <div class="columns medium-6 large-6">
    <p>Definitions are not completely different they just focused on different things. The same way as you ask what is difference between fruits and vegetables, <a href="http://www.livescience.com/33991-difference-fruits-vegetables.html">answer depends on who you are asking cook or botanist</a>.</p>
    <h3>Notes on diagram</h3>
    <p>Messages from actor model are not the same messages from Kay's OOP. But both concept share idea of communication via messages</p>
    <p>In Kay's OOP it is possible to <a href="http://yehudakatz.com/2009/10/04/emulating-smalltalks-conditionals-in-ruby/">organize program flow without built-in if-else</a>. In Stroustrup's OOP it is possible too, but it is not built-in feature, so most time it pairs with procedural <code>if-else</code>.</p>
  </div>
  <div class="columns medium-6 large-6">
    <p><img src="/assets/posts/two-big-schools-of-object-oriented-programming/venn-diagram.svg"></p>
  </div>
</div>

## History of OOP

 - 1963 - Ivan Sutherland's Sketchpad is considered a pioneering work in both object orientation and GUIs.
 - 1967 - Simula appears, and whether it or SmallTalk should be considered the first object oriented language is still a matter of debate.
 - 1969 - Dennis Ritchie starts developing C.
 - 1972 - **SmallTalk** appears. It's the brainchild of **Alan Kay**, who coined term "object orientation".
 - 1979 - **Bjarne Stroustrup** starts working on C with Classes, the precursor to **C++**.
 - 1983 - Objective C appears, and essentially is an effort to add SmallTalk's flavor of object orientation to C.
 - 1985 - Object Pascal appears, and is almost immediately popularized by Turbo Pascal 5.5.
 - 1986 - Work begins on CLOS, an effort to bring object orientation to Common Lisp.
 - 1991 - Visual Basic is released.
 - 1995 - Java is released.
 - 1995 - Delphi is released.

Source: [programmers.stackexchange.com](http://programmers.stackexchange.com/questions/173542/why-did-object-oriented-paradigms-take-so-long-to-go-mainstream)

## Other notes

### Jonathan Rees definitions

From my POV [Jonathan Rees definition](http://paulgraham.com/reesoo.html) is just variation of Alan Kay's.

### Books

- [Theory of Objects](http://lucacardelli.name/Topics/TheoryOfObjects/Contents.html)
- [What Every Programmer Should Know about Object-Oriented Design](https://www.amazon.com/Every-Programmer-Should-Object-Oriented-Design/dp/0932633315)
- [Object-Oriented Analysis and Design with Applications](https://www.amazon.com/Object-Oriented-Analysis-Design-Applications-3rd/dp/020189551X)

## PS

For me this view gives some insight, but same time opens even more questions.

 - [On Understanding Types, Data Abstraction, and Polymorphism](http://lucacardelli.name/Papers/OnUnderstanding.A4.pdf), 1985, [Luca Cardelli](http://lucacardelli.name/), [Peter Wegner](http://cs.brown.edu/~pw/)
 - [Fundamental Concepts in Programming Languages](http://www.itu.dk/courses/BPRD/E2009/fundamental-1967.pdf)
 - Inheritance as a mechanism for code reuse. What are different types of code reuse out there: class-based, prototype-based, duck typing?
 - Types vs Classes. See also: [Type Theory](http://c2.com/cgi/wiki?TypeTheory), [
Types and Programming Languages](http://www.cis.upenn.edu/~bcpierce/tapl/), [On Understanding Types](http://c2.com/cgi/wiki?OnUnderstandingTypes)
 - [Programming Language Theory](http://c2.com/cgi/wiki?ProgrammingLanguageTheory), [Syntaxation](https://www.youtube.com/watch?v=Nlqv6NtBXcA)
 - Definition of polymorphism.
 - Definition of object.
 - Late vs early binding.

To be continued...




