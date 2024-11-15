# ansi strip

**version**: 0.100.1

## **usage**:

Strip ANSI escape sequences from a string.

## Signature

`> ansi strip ...rest`

## Parameters

- `...rest`: For a data structure input, remove ANSI sequences from strings at the given cell paths.

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| record         | record         |
| string         | string         |
| table          | table          |

## Examples

Strip ANSI escape sequences from a string

```bash
> $'(ansi green)(ansi cursor_on)hello' | ansi strip
```
