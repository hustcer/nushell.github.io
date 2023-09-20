# format

**version**: 0.85.0

## **usage**:

Format columns into a string using a simple pattern.

## Signature

`> format (pattern)`

## Parameters

- `pattern`: the pattern to output. e.g.) "{foo}: {bar}"

## Input/output types:

| input  | output         |
| ------ | -------------- |
| record | any            |
| table  | list\<string\> |

## Examples

Print filenames with their sizes

```bash
> ls | format '{name}: {size}'
```

Print elements from some columns of a table

```bash
> [[col1, col2]; [v1, v2] [v3, v4]] | format '{col2}'
```

## Subcommands:

| name                                                   | type    | usage                                                    |
| ------------------------------------------------------ | ------- | -------------------------------------------------------- |
| [`format date`](/commands/docs/format_date.md)         | Builtin | Format a given date using a format string.               |
| [`format duration`](/commands/docs/format_duration.md) | Builtin | Outputs duration with a specified unit of time.          |
| [`format filesize`](/commands/docs/format_filesize.md) | Builtin | Converts a column of filesizes to some specified format. |
