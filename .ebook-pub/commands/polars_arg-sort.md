# polars arg-sort

**version**: 0.100.1

## **usage**:

Returns indexes for a sorted series.

## Signature

`> polars arg-sort --reverse --nulls-last --maintain-order`

## Parameters

- `--reverse`: reverse order
- `--nulls-last`: nulls ordered last
- `--maintain-order`: maintain order on sorted items

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns indexes for a sorted series

```bash
> [1 2 2 3 3] | polars into-df | polars arg-sort
```

Returns indexes for a sorted series

```bash
> [1 2 2 3 3] | polars into-df | polars arg-sort --reverse
```
