---
title: date
categories: |
  date
version: 0.106.0
date: |
  Date-related commands.
usage: |
  Date-related commands.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `date` for [date](/commands/categories/date.md)

<div class='command-title'>Date-related commands.</div>

## Signature

```> date {flags} ```


## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |
## Notes
You must use one of the following subcommands. Using this command as-is will only produce this help message.

## Subcommands:

| name                                                         | description                                               | type     |
| ------------------------------------------------------------ | --------------------------------------------------------- | -------- |
| [`date format`](/commands/docs/date_format.md)               | Removed command: use `format date` instead.               | built-in |
| [`date from-human`](/commands/docs/date_from-human.md)       | Convert a human readable datetime string to a datetime.   | built-in |
| [`date humanize`](/commands/docs/date_humanize.md)           | Print a 'humanized' format for the date, relative to now. | built-in |
| [`date list-timezone`](/commands/docs/date_list-timezone.md) | List supported time zones.                                | built-in |
| [`date now`](/commands/docs/date_now.md)                     | Get the current date.                                     | built-in |
| [`date to-timezone`](/commands/docs/date_to-timezone.md)     | Convert a date to a given time zone.                      | built-in |