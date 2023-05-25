# format

**version**: 0.80.0

## **usage**:

Format columns into a string using a simple pattern.

## Signature

`> format (pattern)`

## Parameters

- `pattern`: the pattern to output. e.g.) "{foo}: {bar}"

## Examples

Print filenames with their sizes

```bash
> ls | format '{name}: {size}'
```

Print elements from some columns of a table

```bash
> [[col1, col2]; [v1, v2] [v3, v4]] | format '{col2}'
```
