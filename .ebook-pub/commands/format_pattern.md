# format pattern

**version**: 0.90.2

## **usage**:

Format columns into a string using a simple pattern.

## Signature

`> format pattern (pattern)`

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
> ls | format pattern '{name}: {size}'
```

Print elements from some columns of a table

```bash
> [[col1, col2]; [v1, v2] [v3, v4]] | format pattern '{col2}'
```
