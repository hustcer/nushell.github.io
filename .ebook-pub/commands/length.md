# length

**version**: 0.80.0

## **usage**:

Count the number of elements in the input.

## Signature

`> length --column`

## Parameters

- `--column`: Show the number of columns in a table

## Examples

Count the number of items in a list

```bash
> [1 2 3 4 5] | length
```

Count the number of columns in a table

```bash
> [{columnA: A0 columnB: B0}] | length -c
```
