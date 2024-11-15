# Quick Tour

The easiest way to see what Nu can do is to start with some examples, so let's dive in.

The first thing you'll notice when you run a command like [`ls`](/commands/docs/ls.md) is that instead of a block of text coming back, you get a structured table.

The table does more than show the directory in a different way. Just like tables in a spreadsheet, this table allows us to work with the data more interactively.

The first thing we'll do is to sort our table by size. To do this, we'll take the output from [`ls`](/commands/docs/ls.md) and feed it into a command that can sort tables based on the contents of a column.

You can see that to make this work we didn't pass commandline arguments to [`ls`](/commands/docs/ls.md). Instead, we used the [`sort-by`](/commands/docs/sort-by.md) command that Nu provides to do the sorting of the output of the [`ls`](/commands/docs/ls.md) command. To see the biggest files on top, we also used [`reverse`](/commands/docs/reverse.md).

Nu provides many commands that can work on tables. For example, we could use [`where`](/commands/docs/where.md) to filter the contents of the [`ls`](/commands/docs/ls.md) table so that it only shows files over 1 kilobyte:

Just as in the Unix philosophy, being able to have commands talk to each other gives us ways to mix-and-match in many different combinations. Let's look at a different command:

You may be familiar with the [`ps`](/commands/docs/ps.md) command if you've used Linux. With it, we can get a list of all the current processes that the system is running, what their status is, and what their name is. We can also see the CPU load for the processes.

What if we wanted to show the processes that were actively using the CPU? Just like we did with the [`ls`](/commands/docs/ls.md) command earlier, we can also work with the table that the [`ps`](/commands/docs/ps.md) command gives back to us:

So far, we've been using [`ls`](/commands/docs/ls.md) and [`ps`](/commands/docs/ps.md) to list files and processes. Nu also offers other commands that can create tables of useful information. Next, let's explore [`date`](/commands/docs/date.md) and [`sys`](/commands/docs/sys.md).

Running [`date now`](/commands/docs/date_now.md) gives us information about the current day and time:

To get the date as a table we can feed it into [`date to-table`](/commands/docs/date_to-table.md)

Running [`sys`](/commands/docs/sys.md) gives information about the system that Nu is running on:

This is a bit different than the tables we saw before. The [`sys`](/commands/docs/sys.md) command gives us a table that contains structured tables in the cells instead of simple values. To take a look at this data, we need to _get_ the column to view:

The [`get`](/commands/docs/get.md) command lets us jump into the contents of a column of the table. Here, we're looking into the "host" column, which contains information about the host that Nu is running on. The name of the OS, the hostname, the CPU, and more. Let's get the name of the users on the system:

Right now, there's just one user on the system named "jt". You'll notice that we can pass a column path (the `host.sessions.name` part) and not just the name of the column. Nu will take the column path and go to the corresponding bit of data in the table.

You might have noticed something else that's different. Rather than having a table of data, we have just a single element: the string "jt". Nu works with both tables of data as well as strings. Strings are an important part of working with commands outside of Nu.

Let's see how strings work outside of Nu in action. We'll take our example from before and run the external [`echo`](/commands/docs/echo.md) command (the `^` tells Nu to not use the built-in [`echo`](/commands/docs/echo.md) command):

If this looks very similar to what we had before, you have a keen eye! It is similar, but with one important difference: we've called `^echo` with the value we saw earlier. This allows us to pass data out of Nu into [`echo`](/commands/docs/echo.md) (or any command outside of Nu, like `git` for example).

### Getting Help

Help text for any of Nu's built-in commands can be discovered with the [`help`](/commands/docs/help.md) command. To see all commands, run [`help commands`](/commands/docs/help_commands.md). You can also search for a topic by doing `help -f <topic>`.
