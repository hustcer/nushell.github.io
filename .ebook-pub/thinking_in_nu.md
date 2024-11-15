# Thinking in Nu

To help you understand - and get the most out of - Nushell, we've put together this section on "thinking in Nushell". By learning to think in Nushell and use the patterns it provides, you'll hit fewer issues getting started and be better setup for success.

So what does it mean to think in Nushell? Here are some common topics that come up with new users of Nushell.

## Nushell isn't bash

Nushell is both a programming language and a shell. Because of this, it has its own way of working with files, directories, websites, and more. We've modeled this to work closely with what you may be familiar with other shells. Pipelines work by attaching two commands together:

```nu
> ls | length
```

Nushell, for example, also has support for other common capabilities like getting the exit code from previously run commands.

While it does have these amenities, Nushell isn't bash. The bash way of working, and the POSIX style in general, is not one that Nushell supports. For example, in bash, you might use:

```sh
> echo "hello" > output.txt
```

In Nushell, we use the `>` as the greater-than operator. This fits better with the language aspect of Nushell. Instead, you pipe to a command that has the job of saving content:

```nu
> "hello" | save output.txt
```

**Thinking in Nushell:** The way Nushell views data is that data flows through the pipeline until it reaches the user or is handled by a final command. You can simply type data, from strings to JSON-style lists and records, and follow it with `|` to send it through the pipeline. Nushell uses commands to do work and produce more data. Learning these commands and when to use them helps you compose many kinds of pipelines.

## Think of Nushell as a Compiled Language

An important part of Nushell's design and specifically where it differs from many dynamic languages is that Nushell converts the source you give it into something to run, and then runs the result. It doesn't have an `eval` feature which allows you to continue pulling in new source during runtime. This means that tasks like including files to be part of your project need to be known paths, much like includes in compiled languages like C++ or Rust.

For example, the following doesn't make sense in Nushell, and will fail to execute if run as a script:

```nu
"def abc [] { 1 + 2 }" | save output.nu
source "output.nu"
abc
```

The [`source`](/commands/docs/source.md) command will grow the source that is compiled, but the [`save`](/commands/docs/save.md) from the earlier line won't have had a chance to run. Nushell runs the whole block as if it were a single file, rather than running one line at a time. In the example, since the output.nu file is not created until after the 'compilation' step, the [`source`](/commands/docs/source.md) command is unable to read definitions from it during parse time.

Another common issue is trying to dynamically create the filename to source from:

```nu
> source $"($my_path)/common.nu"
```

This doesn't work if `my_path` is a regular runtime variable declared with `let`. This would require the
evaluator to run and evaluate the string, but unfortunately Nushell needs this information at compile-time.

However, if `my_path` is a [constant](/book/variables#constant-variables), then this
would work, since the string can be evaluated at compile-time:

```nu
> const my_path = ([$nu.home-path nushell] | path join)
> source $"($my_path)/common.nu" # sources /home/user/nushell/common.nu
```

**Thinking in Nushell:** Nushell is designed to use a single compile step for all the source you send it, and this is separate from evaluation. This will allow for strong IDE support, accurate error messages, an easier language for third-party tools to work with, and in the future even fancier output like being able to compile Nushell directly to a binary file.

For more in-depth explanation, check [How Nushell Code Gets Run](how_nushell_code_gets_run.md).

## Variables are Immutable by Default

Another common surprise for folks coming from other languages is that Nushell variables are immutable by default. Coming to Nushell, you'll want to spend some time becoming familiar with working in a more functional style, as this tends to help write code that works best with immutable variables.

**Thinking in Nushell:** If you're used to using mutable variables for different tasks, it will take some time to learn how to do each task in a more functional style. Nushell has a set of built-in capabilities to help with many of these patterns, and learning them will help you write code in a more Nushell-style. The added benefit of speeding up your scripts by running parts of your code in parallel is a nice bonus.

See [Immutable Variables](variables.html#immutable-variables) and [Choosing between mutable and immutable variables](variables.html#choosing-between-mutable-and-immutable-variables) for more information.

## Nushell's Environment is Scoped

Nushell takes multiple design cues from compiled languages. One such cue is that languages should avoid global mutable state. Shells have commonly used global mutation to update the environment, but Nushell steers clear of this approach.

In Nushell, blocks control their own environment. Changes to the environment are scoped to the block where they happen.

In practice, this lets you write some concise code for working with subdirectories, for example, if you wanted to build each sub-project in the current directory, you could run:

```nu
> ls | each { |row|
    cd $row.name
    make
}
```

The [`cd`](/commands/docs/cd.md) command changes the `PWD` environment variables, and this variable change does not escape the block, allowing each iteration to start from the current directory and enter the next subdirectory.

Having the environment scoped like this makes commands more predictable, easier to read, and when the time comes, easier to debug. Nushell also provides helper commands like [`def --env`](/commands/docs/def.md), [`load-env`](/commands/docs/load-env.md), as convenient ways of doing batches of updates to the environment.

_There is one exception here, where [`def --env`](/commands/docs/def.md) allows you to create a command that participates in the caller's environment._

**Thinking in Nushell:** - The coding best practice of no global mutable variables extends to the environment in Nushell. Using the built-in helper commands will let you more easily work with the environment in Nushell. Taking advantage of the fact that environments are scoped to blocks can also help you write more concise scripts and interact with external commands without adding things into a global environment you don't need.
