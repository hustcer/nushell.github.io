# ansi strip

**version**: 0.80.0

## **usage**:

Strip ANSI escape sequences from a string.

## Signature

`> ansi strip ...rest`

## Parameters

- `...rest`: for a data structure input, remove ANSI sequences from strings at the given cell paths

## Examples

Strip ANSI escape sequences from a string

```bash
> $'(ansi green)(ansi cursor_on)hello' | ansi strip
```
