---
layout: post
title: from requirements to sourcecode and back
---

## TL;DR

In this essay I'll try analyse processes behind software development (how I see them).

## What is my job?

My day-to-day work is converting requirements to actuall working software (and source code particularly). This is general definition. On practice it is bit more complicated.

## Requirements

### Definition (wikipedia)

> In product development and process optimization, a requirement is a singular documented physical and functional need that a particular design, product or process must be able to perform. It is most commonly used in a formal sense in systems engineering, software engineering, or enterprise engineering. It is a statement that identifies a necessary attribute, capability, characteristic, or quality of a system for it to have value and utility to a customer, organization, internal user, or other stakeholde

-- [definition by wikipedia](https://en.wikipedia.org/wiki/Requirement).

### My definition

Requirement is metric to understand if the goal is achievied or not.

Requirements help to answer question "are we there yet?".

<!-- TODO picture with donkey -->

### Examples

It can be yes/no metric. Example: User should be able to login to the system.

Or it can be quantative metric. Example: Server should response in less than 200ms.

Requirement which doesn't define metric is useless, generally it is not a requirement at all. Example: site should load fast. If this requirement doesn't define how-to measure fast than there is no way to verify if this requirement achieved or not.

### It is not waterfall

Requirements often associated with waterfall methodology. Yes waterfall methodology use requirements. Any methodology use requirements, one way or another, it can use different term.

Waterfall tends to collect all requirements before starting development. In agile-like development it is possible to collect small sets of requirements and start to do developement, continue development and requirements collection in parallel.

Requirements is just metric to verify if the goal is achieved or not. So if you develop something, if you have goal, you have requirements. You may choose not to specify them explicitly, but it doesn't mean you don't have them. No decision is decision too.

### There are different levels of requirements

For example, there can be higher level business requirement. After analysis/discussion of this requirement as result scenarios appears. Those scenraios are not requirements at business level, becuase they describe implementation. But they are requirements for "development" level, because they describe how system should behave and not how it should be implemented in sense of code, technologies etc.

So "requirements" term is tricky.

## Requirements engeneering (RE)

> Requirements **analysis** in systems engineering and software engineering, encompasses those tasks that go into determining the needs or conditions to meet for a new or altered product or project, taking account of the possibly **conflicting** requirements of the various stakeholders, **analyzing**, **documenting**, **validating** and managing software or system requirements.

-- [definition by wikipedia](https://en.wikipedia.org/wiki/Requirements_analysis)

I use term "requirements engeneering" (RE) for clarity, more common term "requirements analysis".

### Requirements analysis

> Analysis is the process of breaking a complex topic or substance into smaller parts in order to gain a better understanding of it

-- [definition by wikipedia](https://en.wikipedia.org/wiki/Analysis)

Basically requirements analysis is process of decomposing requirements into smaller requirements.

### Requirements validation

Process of checking if one requirement not contradicitng another. Typical situation new vs old. Stackeholder vs other stakeholder.

### Documenting requirements

Doumentating can refer to documenting initial requirements and/or result of analysis.

### Scenarios

Sometimes scenarios and set of non-functional requirements can be treated as result of requirements engeneering. Process of producing scenarios from decomposed requirements can be considered as synthesis.

## But, but... we do not have requirements in our development-process

Every time I hear this, It reminds me this quote:

>Alice: Would you tell me, please, which way I ought to go from here?
The Cheshire Cat: That depends a good deal on where you want to get to.
Alice: I don't much care where.
The Cheshire Cat: Then it doesn't much matter which way you go.

―- Lewis Carroll, Alice in Wonderland

## Business analysis (BA)

RE can be part of BA. Thought it seems not every software-development process can make use of BA.


## Development

Development is translation of requirements in architecture, technologies, alogrithms, data structures, source code.

### Existing code

Most likely you will need to interact with existing code. So you will need to understand existing code: build mental mapping between existing code and coresponding requirements. If it was you who developed this code and it was recently, than you lucky you already have this mapping.
But if it is





Part of process of transformation requirements to code is to find best-fit abstraction in code that will conform requirements and additionally would be easy to reason about.

Im not claiming it is possible to write code that is possible to reason about without documantation. But Im trying as much as possible.

The purpose of this abstraction building process is
 - to make code easy to reason about
 - to remove redundncy (so it would be easy to reason about it and easier to edit code)

Not a purpose but rather rules of the games:
 - testability
 - fit in type system (if you have one in your language)
 - fit into existing code conventions (sometimes code conventions is subject to change)



requirement as direction
default choise

https://signalvnoise.com/posts/3228-if-you-need-a-machine-and-dont-buy

reverse engeneering

requirements -> code
terminology


### What is requirements?


### Is there development-process which doesn't have requirements?

Any work has its goal. Soft-development is not exclusion.

You can't walk without end destination. You can choose not to set end destination. But at the end of walk you will be at some place which is end destination. No choise is a choise too.

Same goes for software-development. You will get software at the end, but if you don't setup goal ahead, than don't complain about the result.

Requirements is the

### It is not about waterfall



Requirements driving development. They are like a compass. Helping you to find direction in development porcess.
Even though they are so improtant, it doesn't mean they can't change in time. They can and most likely will.

It is not a bad thing. It is the way it works. The




















