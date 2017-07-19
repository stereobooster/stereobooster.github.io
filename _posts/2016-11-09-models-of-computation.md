---
layout: post
title: Models of Computation
---

## What is computation?

According to Leslie Lamport computation is what computational device (or human - my addition) does. It doesn't matter if it is "useful" calculation or simple bits flipping. More formal way to define computation is to view it as sequence of state mutations.

<div class="flex-video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/BDPHfRuAFnU" frameborder="0" allowfullscreen></iframe>
</div>

There is other wide used way to think of computation: functions. Mathematical function maps some input value to some output value. But mathematical function doesn't care how you get from input to output, but for computation it is big deal. Otherwise there would be no bubblesort, quicksort or other sort algorithms. Computable mathematical function is expected to have output value e.g. halt, while computation can be infinite, think of clock or OS.



## What are models of computation?

Models of computation is way to define primitives (operations, storage, alphabet) to carry out computation to be able to do formal reasoning about computations. Being able to do formal reasoning about computation, for example, helped Turing to prove that halting problem generally unsolvable. Formal verification used to prove strength of cryptographic algorithms.

Generally any algorithm explanation assumes some kind of model of computation even if it doesn't say this explicitly.

Depending on what you are focusing on you may need different model. Knuth described processor with supported instructions to be as close to real world situation as possible. If you want to describe concurrent data structure you need to specify processor (model of computation) with CAS operation. This is just few examples.

## Classification of computation models

There are three types of models used in computer science and engineering: **abstract machine** model, a **programming** model and a **hardware** model. [Reference](https://lusy.fri.uni-lj.si/sites/lusy.fri.uni-lj.si/files/publications/jekovec2012-tr02.pdf).

### Abstract machine model

Abstract machine model can alternatively be called a cost model or a performance model.

Those models used for general algorithm research and complexity research. Focus on number of steps required to perform computations. Example: Turing Machine, Sequential State model.

See also: [complexity zoo](https://complexityzoo.uwaterloo.ca/Complexity_Zoo).

### Programming model

The programming model provides the semantic of programming abstraction which serves as a basis for the programming language. A primary goal is to allow reasoning about program meaning and correctness.

Interesting fact that some of those models are behind subject, for example OOP. OOP first appeared in 1967 in [Simula](http://www.olejohandahl.info/old/birth-of-oo.pdf) and was highly [developed in 1980-s by Alan Kay in SmallTalk](http://www.cs.virginia.edu/~evans/cs655/readings/smalltalk.html). Design Patterns: Elements of Reusable Object-Oriented Software by GoF appeared in 1994 and Patterns of Enterprise Application Architecture in 2003.
But formal models were developed later, for example [Formal Methods applied to Object-Oriented Programming](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.36.9639&rep=rep1&type=pdf) in 1992 or [Relationships for object-oriented programming languages](https://www.cl.cam.ac.uk/techreports/UCAM-CL-TR-702.pdf) in 2007 or [NOOP A Mathematical Model Of Object-Oriented Programming](https://scholarship.rice.edu/bitstream/handle/1911/70199/Abdel-GawadM.pdf) in 2011 or [An Algebraic Formalization of the GoF Design Patterns](https://arxiv.org/pdf/1003.3338.pdf) in 2010 or [A Formal Specification of GoF Design Patterns](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.16.8314&rep=rep1&type=pdf) in 1999.

In 1930s Alonzo Church started to work on lambda-calculus.

In 1934 Curry noticed that types of the combinators could be seen as axiom-schemes for intuitionistic implicational logic. It was start for later work on [Curry–Howard correspondence or isomorphism](http://disi.unitn.it/~bernardi/RSISE11/Papers/curry-howard.pdf) which opened up doors to use programs as proofs.

Other notable event here is [Chomsky Hierarchy](https://people.cs.clemson.edu/~goddard/texts/theoryOfComputation/8a.pdf) developed in 1956. The classifications are:

|        | grammar           | language               | automaton                |
|--------|-------------------|------------------------|--------------------------|
| type 0 | unrestricted      | recursively enumerable | Turing machine           |
| type 1 | context-sensitive | context-sensitive      | linear-bounded automaton |
| type 2 | context-free      | context-free           | pushdown automaton       |
| type 3 | regular           | regular                | finite-state automaton   |

* The classes are nested, with type 0 being the largest and most general, and type 3 being the smallest and most restricted.

Later [Martin Löf](https://github.com/michaelt/martin-lof) extend [type theory, which can be applied to programming languages](http://www.cse.chalmers.se/research/group/logic/book/book.pdf).

See also: [On Understanding Types, Data Abstraction, and Polymorphism](http://lucacardelli.name/papers/onunderstanding.a4.pdf)

![](/assets/posts/models-of-computation/classification-of-type systems.png)

### Hardware model

Architectural or hardware model is used for specific language implementation and most notably for the high performance machine (and algorithms optimized for those machine) design purpose.

Example: Von Neumann architecture, [pointer machine](https://courses.csail.mit.edu/6.851/spring07/scribe/lec12.pdf) which used in [6.851: Advanced Data Structures](http://courses.csail.mit.edu/6.851/spring12/lectures/L01.html) course, MMIX processor used in TAOCP.

## What are known models of computation out there?

The most well known is Turing Machine (TM). Introduced by Alan Turing in 1936 in [ON COMPUTABLE NUMBERS, WITH AN APPLICATION TO THE ENTSCHEIDUNGSPROBLEM](https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf). Most of the time when somebody mentions Turing Machine, they have in mind Universal Turing Machine (**UTM**) introduced in 1936 paper.

| Author                                      | Year      | Papers                                      |
|---------------------------------------------|-----------|---------------------------------------------|
| Church                                      | 1936      | Lambda calculus                             |
| Turing                                      | 1936-7    | Turing Machine (A-machine or Automatic machine) — generic tape-based abstract machine computational. [ON COMPUTABLE NUMBERS, WITH AN APPLICATION TO THE ENTSCHEIDUNGSPROBLEM](https://www.cs.virginia.edu/~robins/Turing_Paper_1936.pdf) |
| Emil Post                                   | ?1936     | Post-Turing machine — minimalist one-tape, two-direction, 1 symbol (blank, mark) Turing-like machine but with default sequential instruction execution in a manner similar to the basic 3-instruction counter machines. [Post Machine](http://logica.ugent.be/liesbeth/postsmachine.pdf), [Post Machine Uspensky](http://www.win.tue.nl/~wstomv/misc/PostMachineUspensky.pdf) |
| Goldstine & von Neumann                     | 1947      | [28 June 1946](https://library.ias.edu/files/Prelim_Disc_Logical_Design.pdf), [ 1 April 1947](https://library.ias.edu/files/pdfs/ecp/planningcodingof0103inst.pdf), [ECP](https://library.ias.edu/ecp), [The von Neumann Model](http://www.c-jump.com/CIS77/CPU/VonNeumann/lecture.html#V77_0010_von_neumann), [The von Neumann Machine](http://www.ict.griffith.edu.au/~johnt/1004ICT/lectures/lecture07/Cragon-pp1-13.html) |
| Kleene                                      | 1952      | |
| *Hans Hermes                                | 1954      | |
| Hao Wang                                    | 1957      | Wang B-machine - with only 4 sequential instructions it is very similar to, but even simpler than, the 7 sequential instructions of the Post–Turing machine. W-machine is simply the B-machine with the one additional instruction. &mdash;[Universal Turing machines: An exercise in coding](http://onlinelibrary.wiley.com/doi/10.1002/malq.19570030602/abstract), &mdash;[A Variant to Turing's Theory of Computing Machines](http://dl.acm.org/citation.cfm?id=320867) |
| *Rózsa Péter                                | 1958      | |
| Davis                                       | 1958      | [Computability & Unsolvability](http://philpapers.org/rec/DAVCU) |
| *Ershov                                     | 1959      | |
| *Heinz Kaphengst                            | 1959      | &mdash;[Eine Abstrakte Programmgesteuerte Rechenmaschine](http://onlinelibrary.wiley.com/doi/10.1002/malq.19590051413/abstract) |
| Zdzislaw Alexander Melzak                   | 1961      | [On a problem in geometrical probability](http://cms.math.ca/openaccess/cmb/v4/cmb1961v04.0185-0186.pdf) |
| Joachim Lambek                              | 1961      | [HOW TO PROGRAM AN INFINITE ABACUS](https://cms.math.ca/openaccess/cmb/v4/cmb1961v04.0295-0302.pdf) |
| Marvin Minsky                               | 1961      | [Steps Toward Artificial Intelligence](http://worrydream.com/refs/Minsky%20-%20Steps%20Toward%20Artificial%20Intelligence.pdf), [RECURSIVE UNSOLVABILITY OF POST'S PROBLEM OF "TAG" AND OTHER TOPICS IN THEORY OF TURING MACHINES](https://www.wolframscience.com/prizes/tm23/images/Minsky.pdf) |
| Shepherdson & Sturgis                       | 1963      | &mdash;[Computability of Recursive Functions](http://dl.acm.org/citation.cfm?id=321170) |
| Elgot & Robinson                            | 1964      | RASP, &mdash;[Random-Access Stored-Program Machines, an Approach to Programming Languages](http://dl.acm.org/citation.cfm?id=321240) |
| Davis                                       | 1965      | Undecidable |
| van Heijenoort                              | 1967      | |
| [Minsky](http://amturing.acm.org/award_winners/minsky_7440781.cfm) | 1967      | [Computation: Finite and Infinite Machines](http://www.cba.mit.edu/events/03.11.ASE/docs/Minsky.pdf) |
| [Knuth](http://amturing.acm.org/award_winners/knuth_1013846.cfm) | 1968–2011 | The Art of Computer Programming, [MMIX](http://mmix.cs.hm.edu/) |
| Hartmanis                                   | 1971      | &mdash;[Computational complexity of random access stored program machines](http://link.springer.com/article/10.1007/BF01694180) |
| Cook & Reckhow                              | 1972      | [Time Bounded Random Access Machines](https://www.cs.toronto.edu/~sacook/homepage/rams.pdf) |
| Carl Hewitt                                 | 1973      | Actor model |
| Kahn                                        | 1974      | Kahn Process Network |
| Hoare                                       | 1978      | [Communicating Sequential Processes](http://www.usingcsp.com/cspbook.pdf), Process Calculi |
| Arnold Schönhage                            | 1979      | &mdash;[Storage Modification Machines](http://dl.acm.org/citation.cfm?id=720017) |
| Milner                                      | 1980      | Calculus of Communicating Systems, Process Calculi |
| Lee                                         | 1986      | Synchronous Dataflow |
| van Emde Boas                               | 1989      | [Machine models and simulations](https://www.illc.uva.nl/Research/Publications/Reports/CT-1989-02.text.pdf) |
| Boolos & Burgess; Boolos, Burgess & Jeffrey | <nobr>1970–2002</nobr> | [Computability and Logic](http://hykelhosni.weebly.com/uploads/1/4/8/6/14867962/c-a-l-ch1-4.pdf) |

**TODO**: implement [Narrative Chart](http://csclub.uwaterloo.ca/~n2iskand/?page_id=13) for models of computation.

### Turing machines

Basically Turing machine - is a tape machine capable to do some set of operations like write, erase, move left or right. Number of operations may differ, number of tapes may differ too. Tape is infinite.

By Turing:

- Automatic (**A**) machines motion completely determined by the configuration.
- Choice (**C**) machine, whose motion is only partially determined by the configuration.
- Oracle (**O**) machines is a **A**-machine that pauses its computation at some state, to complete its calculation, it awaits the decision of the oracle — an unspecified entity.
- Universal (**U**) machine. It is possible to invent a single machine which can be used to compute any computable sequence. If this machine U is supplied with the tape on the beginning of which is written the string of quintuples separated by semicolons of some computing machine M, then U will compute the same sequence as M.

By Wang:

- **B**-machine - with only 4 sequential instructions it is very similar to, but even simpler than, the 7 sequential instructions of the Post–Turing machine.
- **W**-machine is simply the B-machine with the one additional instruction.

Other:

- Non-deterministic (**NTM**) Turing machine. Differs from deterministic machine by the fact that current state can have more than one next states. **Note**: it implements bounded non-determinism.
- Probabilistic (**PTM**) Turing machine is a non-deterministic Turing machine which chooses between the available transitions at each point according to some probability distribution.
- [Neural Turing Machines](https://arxiv.org/pdf/1410.5401.pdf) which are gone pretty far from original one tape machine.

See also:

- [Turing's Ideas and Models of Computation](http://www.cs.montana.edu/~elser/turing%20papers/Turing's%20Ideas%20and%20Models%20of%20Computation.pdf)
- [The Origins of the Turing Thesis Myth](http://www.engr.uconn.edu/~dqg/papers/myth.pdf)
- [Turing’s Influence on Programming](http://www.easychair.org/publications/download/Turing_s_Influence_on_Programming)

### Survey of the sequential and parallel models of computation

[Very useful paper on subject](https://lusy.fri.uni-lj.si/sites/lusy.fri.uni-lj.si/files/publications/jekovec2012-tr02.pdf)

![](/assets/posts/models-of-computation/diagram.png)

### Other Notes

There is also Actor System, which claims to be able to implement unbounded non-determinism, according to Carl Hewitt. While TM only able to implement bounded non-determinism.

Unproved claim: bounded nondteremenism corresponds to system where next step is non-determined, unbounded non-determinism corresponds to the system where order of steps non-determined.

Some authors claims that output device would make difference for TM. I believe Turing meant tape to be used as memory and output device. When he build working prototype of computer he used Williams tubes as memory and as output device.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ecIWPzGEbFc?t=19m35s&rel=0" frameborder="0" allowfullscreen></iframe>



[Understanding the Stack](http://www.cs.umd.edu/class/sum2003/cmsc311/Notes/Mips/stack.html)

## Comparison of models of computation

- [A Framework for Comparing Models of Computation](https://inst.eecs.berkeley.edu/~ee249/fa07/discussions/TSM.pdf)
- [How to Compare the Power of Computational Models](http://www.cs.tau.ac.il/~nachum/papers/ComputationalPower.pdf)
- [The memory models that underlie programming languages](http://canonical.org/~kragen/memory-models/#addtoc_1)
