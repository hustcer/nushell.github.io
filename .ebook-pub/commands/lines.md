# lines

**version**: 0.85.0

## **usage**:

Converts input to lines.

## Signature

`> lines --skip-empty`

## Parameters

- `--skip-empty`: skip empty lines

## Input/output types:

| input | output         |
| ----- | -------------- |
| any   | list\<string\> |

## Examples

Split multi-line string into lines

```bash
> $"two\nlines" | lines
```
