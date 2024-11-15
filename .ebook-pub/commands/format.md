# format

**version**: 0.100.1

## **usage**:

Various commands for formatting data.

## Signature

`> format `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Notes

```text
You must use one of the following subcommands. Using this command as-is will only produce this help message.
```

## Subcommands:

| name                                                   | type     | usage                                                    |
| ------------------------------------------------------ | -------- | -------------------------------------------------------- |
| [`format date`](/commands/docs/format_date.md)         | built-in | Format a given date using a format string.               |
| [`format duration`](/commands/docs/format_duration.md) | built-in | Outputs duration with a specified unit of time.          |
| [`format filesize`](/commands/docs/format_filesize.md) | built-in | Converts a column of filesizes to some specified format. |
| [`format pattern`](/commands/docs/format_pattern.md)   | built-in | Format columns into a string using a simple pattern.     |
