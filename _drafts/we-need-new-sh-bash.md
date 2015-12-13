---
layout: post
title: We need new sh (bash)
---

# What is sh and why does it matter?

`sh` - shell, the standard command language interpreter (according to [POSIX standard](http://pubs.opengroup.org/onlinepubs/009695399/utilities/sh.html)). The `sh` utility is a command language interpreter that shall execute commands read from a command line string, the standard input, or a specified file. The application shall ensure that the commands to be executed are expressed in the language described in [Shell Command Language](http://pubs.opengroup.org/onlinepubs/009695399/utilities/xcu_chap02.html).

`sh` itself is not an implementation: `/bin/sh` is a symlink (or a hard link) to an actual implementation. There are many different implementations of `sh`: `bash`, `dash`, `zsh`. It is required to be present on all [POSIX](https://en.wikipedia.org/wiki/POSIX) systems.

**So `sh` is basic admin/devop tool for scripting POSIX systems.**

## Implementations

 - OSX and many Linux systems use `bash`
 - Debian and Ubuntu systems symlink use `dash`
 - OpenBSD uses `pdksh`
 - FreeBSD's `sh` is a descendant of the original UNIX `Bourne shell`
 - [Busybox](https://en.wikipedia.org/wiki/BusyBox), which is usually run during the Linux system boot time as part of [initramfs](https://en.wikipedia.org/wiki/Initramfs). It uses the `ash`
 - `zsh` one of most advanced shells. [Compatible with `sh`](http://zsh.sourceforge.net/FAQ/zshfaq02.html)
 - [`fishshell`](http://fishshell.com/). Also cool shell, though not compatible with `sh`

## History

**IMPORTANT**: this section partially copied from this [article](http://www.ibm.com/developerworks/library/l-linux-shells/). Intention to make accents in texts as I see it.

### Thompson shell, 1971

Ken Thompson (of Bell Labs) developed the first shell for UNIX called the V6 shell in 1971. Similar to its predecessor in Multics, this shell (`/bin/sh`) was an independent user program that executed outside of the kernel. Concepts like globbing (pattern matching for parameter expansion, such as `*.txt`) were implemented in a separate utility called `glob`, as was the `if` command to evaluate conditional expressions.

The shell introduced a **compact syntax for redirection** (`<` `>` and `>>`) and **piping** (`|` or `^`) that has survived into modern shells. You can also find support for invoking **sequential commands** (with `;`) and **asynchronous commands** (with `&`).

What the Thompson shell lacked was the ability to script. Its sole purpose was as an interactive shell (command interpreter) to invoke commands and view results.

### Bourne shell, 1977

The Bourne shell, created by Stephen Bourne at AT&T Bell Labs for V7 UNIX in 1977. The author developed the Bourne shell after working on an ALGOL68 compiler, so you'll find its **grammar more similar to the Algorithmic Language (ALGOL)** than other shells.

The Bourne shell had two primary goals: serve as a command interpreter to **interactively execute** commands for the operating system and for **scripting** (writing reusable scripts that could be invoked through the shell). In addition to replacing the Thompson shell, the Bourne shell offered several advantages over its predecessors. Bourne introduced **control flows, loops, and variables** into scripts, providing a more functional language to interact with the operating system (both interactively and noninteractively). The shell also permitted you to use shell scripts as filters, providing integrated support for handling signals, but lacked the ability to define functions. Finally, it incorporated a number of features we use today, including command substitution (using back quotes) and HERE documents to embed preserved string literals within a script.

The Bourne shell was not only an important step forward but also the anchor for numerous derivative shells, many of which are used today in typical Linux systems. The Bourne shell led to the development of the Korn shell (`ksh`), Almquist shell (`ash`), and the popular Bourne Again Shell (or `bash`). The C shell (`csh`) was under development at the time the Bourne shell was being released.

### The Tenex C shell, 1978

The C shell was developed for Berkeley Software Distribution (BSD) UNIX systems by Bill Joy while he was a graduate student at the University of California, Berkeley, in 1978. Five years later, the shell introduced functionality from the Tenex system (popular on DEC PDP systems). Tenex introduced **file name and command completion** in addition to **command-line editing features**. The Tenex C shell (`tcsh`) remains backward-compatible with `csh` but improved its overall interactive features. The `tcsh` was developed by Ken Greer at Carnegie Mellon University.

One of the key design objectives for the C shell was to create a scripting language that looked **similar to the C language**. This was a useful goal, given that C was the primary language in use (in addition to the operating system being developed predominantly in C).

A useful feature introduced by Bill Joy in the C shell was **command history**. This feature maintained a history of the previously executed commands and allowed the user to review and easily select previous commands to execute. For example, typing the command `history` would show the previously executed commands. The up and down arrow keys could be used to select a command, or the previous command could be executed using `!!`. It's also possible to refer to arguments of the prior command; for example, `!*` refers to all arguments of the prior command, where `!$` refers to the last argument of the prior command.

### Korn shell, ~1978
he Korn shell (ksh), designed by David Korn, was introduced around the same time as the Tenex C shell. One of the most interesting features of the Korn shell was its use as a scripting language in addition to being backward-compatible with the original Bourne shell. The shell also provides several more **advanced features found in modern scripting languages like Ruby and Python—for example, associative arrays and floating point arithmetic**.

In addition to the other features, Korn supports the **alias** feature (to replace a word with a user-defined string).

### The Bourne-Again Shell
The Bourne-Again Shell, or Bash, is an open source GNU project intended to replace the Bourne shell. Bash was developed by Brian Fox. As its name implies, Bash is a superset of the Bourne shell, and most Bourne scripts can be executed unchanged.

In addition to supporting backward-compatibility for scripting, Bash has incorporated features from the Korn and C shells. You'll find command history, command-line editing, a directory stack (pushd and popd), many useful environment variables, command completion, and more.

Bash has continued to evolve, with new features, support for regular expressions (similar to Perl), and associative arrays. Although some of these features may not be present in other scripting languages, it's possible to write scripts that are compatible with other languages.


