# Moving around your system

Early shells allow you to move around your filesystem and run commands, and modern shells like Nu allow you to do the same. Let's take a look at some of the common commands you might use when interacting with your system.

## Viewing directory contents

As we've seen in other chapters, [`ls`](/commands/docs/ls.md) is a command for viewing the contents of a path. Nu will return the contents as a table that we can use.

The [`ls`](/commands/docs/ls.md) command also takes an optional argument, to change what you'd like to view. For example, we can list the files that end in ".md"

## Glob patterns (wildcards)

The asterisk (\*) in the above optional argument "\*.md" is sometimes called a wildcard or a glob. It lets us match anything. You could read the glob "\*.md" as "match any filename, so long as it ends with '.md' "

The most general glob is `*`, which will match all paths. More often, you'll see this pattern used as part of another pattern, for example `*.bak` and `temp*`.

In Nushell, we also support double `*` to talk about traversing deeper paths that are nested inside of other directories. For example, `ls **/*` will list all the non-hidden paths nested under the current directory.

Here, we're looking for any file that ends with ".md", and the two asterisks further say "in any directory starting from here".

In addition to `*`, there is also the `?` pattern which will match a single character. For example, you can match the word "port" by using the pattern `p???`.

## Changing the current directory

To change from the current directory to a new one, we use the [`cd`](/commands/docs/cd.md) command. Just as in other shells, we can use either the name of the directory, or if we want to go up a directory we can use the `..` shortcut.

Changing the current working directory can also be done if [`cd`](/commands/docs/cd.md) is omitted and a path by itself is given:

**Note:** changing the directory with [`cd`](/commands/docs/cd.md) changes the `PWD` environment variable. This means that a change of a directory is kept to the current block. Once you exit the block, you'll return to the previous directory. You can learn more about working with this in the [environment chapter](./environment.md).

## Filesystem commands

Nu also provides some basic filesystem commands that work cross-platform.

We can move an item from one place to another using the [`mv`](/commands/docs/mv.md) command:

We can copy an item from one location to another with the [`cp`](/commands/docs/cp.md) command:

We can remove an item with the [`rm`](/commands/docs/rm.md) command:

The three commands also can use the glob capabilities we saw earlier with [`ls`](/commands/docs/ls.md).

Finally, we can create a new directory using the [`mkdir`](/commands/docs/mkdir.md) command:
