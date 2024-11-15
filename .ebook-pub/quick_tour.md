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

So far, we've been using [`ls`](/commands/docs/ls.md) and [`ps`](/commands/docs/ps.md) to list files and processes in the form of a simple table. But data in Nu is structured and can be arbitrarily nested. As an example, let's now explore the [`help commands`](/commands/docs/help_commands.md) command.

Running [`help commands`](/commands/docs/help_commands.md) gives us information for all Nushell commands as a table. However, the output will be quite large, so let's get the row for the `each` command only.

This is a bit different than the tables we saw before. Retrieving a single row from a table gives us a [record](/book/types_of_data.html#records), which is set of key-value pairs. Note that the "params" and "input_output" columns happen to contain tables instead of a simple values. To view only one of those columns, we can use the [`get`](/commands/docs/get.md) command to retrieve it:

The [`get`](/commands/docs/get.md) command lets us jump into the contents of structured data (a table, record, or list). We can even pass it nested columns to access data at any depth.

These nested columns are called [cell paths](/book/types_of_data.html#cell-paths). Nu will take the cell path and go to the corresponding bit of data in a table, record, or list. Cell paths also support row numbers, so we could have rewritten the above pipeline as:

### Getting Help

You can see the help text for any of Nu's built-in commands by using the [`help`](/commands/docs/help.md) command or by passing the `--help` flag to a command. You can also search for a topic by doing `help -f <topic>`.
