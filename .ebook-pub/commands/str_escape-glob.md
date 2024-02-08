# str escape-glob

**version**: 0.90.2

## **usage**:

Escape glob pattern.

## Signature

`> str escape-glob ...rest`

## Parameters

- `...rest`: For a data structure input, turn strings at the given cell paths into substrings.

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| record         | record         |
| string         | string         |
| table          | table          |

## Examples

escape glob pattern before list

```bash
> let f = 'test[a]'; ls ($f | str escape-glob)
```
