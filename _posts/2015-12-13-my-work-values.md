---
layout: post
title: My work values
excerpt_separator: <!--more-->
---

## Build something valuable

You spend a lot of time doing work. You need to get something more than just money. You need to enjoy work itself, you need believe in stuff you build.

<!--more-->

## Teammates

I'm passionate about what I'm doing. I'd like to work with people who pay attention, who care about what they are doing too.

## Communication is the key

Respect people. Everybody is different. Be yourself a person of worth.

Prior sending message make sure purpose of your message is clear. Make **TL;DR** for long messages.
Do not afraid to ask, but think about possible answer yourself. 80% of time you do not need to ask - save time for you and your correspondent.

> If I Had More Time, I Would Have Written a Shorter Letter
> - [Blaise Pascal](http://quoteinvestigator.com/2012/04/28/shorter-letter/)

Pay attention to your tone and words. See: [Medium is the message](https://en.wikipedia.org/wiki/The_medium_is_the_message), [Poe's law](https://en.wikipedia.org/wiki/Poe%27s_law).

Prove your point, but use plain old logic, rather than “marketing”, logical bombs etc. See: [Logical fallacies](https://yourlogicalfallacyis.com/)

## Knowledge over authority

Decision should be made by people with appropriate knowledge in the area.

Some examples:

 - Design should be done by person with taste (sense of aesthetics).
 - Design and application flow should be reviewed/specified by person with knowledge in usability, ergonomics.
 - Code should be written/reviewed by specialist in according language/technology.
 - Application feature sets should be specified by someone who has clear knowledge of business area, little of UX knowledge and some creativity.

This is seems to be obvious but on practice it is far from truth

**Note**: I listed responsibilities. One person can be responsible for more than one thing.

## One team

Company should be one team - bunch of people connected with one big goal, sharing same ideas and believes. If you start to divide team to “them” and “we” this is first symptom. Instead of dividing people, gather them in small groups based on interest, responsibility etc. Everyone should have vote right and ability to brought their view to public. If you limit communication - you limit creativity. Creativity is about breaking limits and thinking out of the box.

## Requirements first

Requirements, business logic and terminology should be well documented. Everybody should use same terminology.

It is good if you can easily travel from code to requirements and vice versa. In this case, ~~if~~ when requirements change it will be much easier to change code accordingly. Or in case of bug in code you can use requirements as reference.

Every requirement should have clear measurable success condition described. So you can actually prove that requirement is fulfilled.

Make sure system is usable with given set of requirements. It makes no sense to do undercooked meal - you spent time and money, but stayed hungry.

## Do as less as possible

Less code means less bug. But be sure you fulfill requirements.

If you have option to use existing open source solution, go for it. But check if it is well maintained and trusted one.

If there is third-party service solving your problem - use it. But be aware of [vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).

## Deliver as soon as possible

Shorter response loop makes it possible to do less and get more. [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it). Vision and requirements change based on existing experience.

Prototype instead of telling, drawing or describing. Sometimes it is much faster to do some code and show prototype instead of describing it in letter.

## Think in scale

### Example 1

You put one more dependency in project. It means:

- every team member will need to install it. **Plus one** if development environment setup is automated
- team members can have different OSes, processors with different architectures. **Plus one** if development environment use virtualization
- you will need to setup it across all stagings and production servers. **Plus one** if provisioning of servers is automated. Plus two if you reuse same provisioning scripts for development and production.
- if it is client-side library you need to be sure it works on all targeted devices. **Plus one** if you have targeted devices (OS, architecture, soft versions, screen size etc) is documented as requirements. **Plus two** if you can run automated tests against all targeted devices. **Plus three** if tests connected to Continuous Integration service
- every client will need to download new dependency. Sometimes they will need to download it again and again. In case of Facebook every bit in js will cost a lot of traffic.
- new dependency will cost not just traffic, but memory and CPU. For client even 0.1 sec can change impression of app speed. For server it will add costs to every application instance (thread) running.
- check if it is secure. **Plus one** if you can prove that it wasn't tampered based on digital signature. **Plus two** if you have automated script to check if there any vulnerabilities discovered based on public reports. **Plus three** if you have general vulnerability scanner and system hardening scripts. Plus for if they run automatically on CI build and on schedule.

One more dimension which gets out of the head every time. Time (yep, pun intended):

- You will need to update this dependency over time. Everybody will need to update it. Teammates, servers, clients. Again and again.

It is not always that bad.

It can be shortcut now, but over time it will cost you more. See [technical debt](http://martinfowler.com/bliki/TechnicalDebt.html).

### Example 2

You wrote letter and spent just 10 minutes (not paying attention to what you wrote). Your teammates (each) will spend time to decrypt, what did you mean. Then you will get response, probably with question. Because everybody is busy there will be delay between messages.

You got the point.

## Automate everything

Automate builds, tests, deployments, development environment setup, server provisioning, security audit, code style checks, code quality checks, benchmarks etc.

Do not ask people to follow coding standards, rather make script to automatically check compliance to standards.

Do not make people to do the work which can be done by computers.

## Latter means never

This is make sense according YAGNI, but do not create technical debts.

Do not keep things in mind put comments in code or tickets in issue tracker.

## See also

 - [Adam Wiggins Heroku values](https://gist.github.com/adamwiggins/5687294)
 - [Brandur Leach Heroku values](https://brandur.org/heroku-values)
 - [Joel Spolsky test](http://www.joelonsoftware.com/articles/fog0000000043.html)
 - [How github works](http://zachholman.com/posts/how-github-works/)
 - [Rework](https://37signals.com/rework/) and [Jason Fried “Why work doesn't happen at work”](https://www.ted.com/talks/jason_fried_why_work_doesn_t_happen_at_work)

