# dfr arg-sort

**version**: 0.80.0

## **usage**:

Returns indexes for a sorted series.

## Signature

`> dfr arg-sort --reverse --nulls-last`

## Parameters

- `--reverse`: reverse order
- `--nulls-last`: nulls ordered last

## Examples

Returns indexes for a sorted series

```bash
> [1 2 2 3 3] | dfr into-df | dfr arg-sort
```

Returns indexes for a sorted series

```bash
> [1 2 2 3 3] | dfr into-df | dfr arg-sort -r
```
