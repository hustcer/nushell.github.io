# date

**version**: 0.93.0

## **usage**:

Date-related commands.

## Signature

`> date `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Notes

```text
You must use one of the following subcommands. Using this command as-is will only produce this help message.
```

## Subcommands:

| name                                                         | type    | usage                                                     |
| ------------------------------------------------------------ | ------- | --------------------------------------------------------- |
| [`date format`](/commands/docs/date_format.md)               | Builtin | Removed command: use `format date` instead.               |
| [`date humanize`](/commands/docs/date_humanize.md)           | Builtin | Print a 'humanized' format for the date, relative to now. |
| [`date list-timezone`](/commands/docs/date_list-timezone.md) | Builtin | List supported time zones.                                |
| [`date now`](/commands/docs/date_now.md)                     | Builtin | Get the current date.                                     |
| [`date to-record`](/commands/docs/date_to-record.md)         | Builtin | Convert the date into a record.                           |
| [`date to-table`](/commands/docs/date_to-table.md)           | Builtin | Convert the date into a structured table.                 |
| [`date to-timezone`](/commands/docs/date_to-timezone.md)     | Builtin | Convert a date to a given time zone.                      |
