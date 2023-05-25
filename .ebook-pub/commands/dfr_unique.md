# dfr unique

**version**: 0.80.0

## **usage**:

Returns unique values from a dataframe.

## Signature

`> dfr unique --subset --last --maintain-order`

## Parameters

- `--subset {any}`: Subset of column(s) to use to maintain rows (lazy df)
- `--last`: Keeps last unique value. Default keeps first value (lazy df)
- `--maintain-order`: Keep the same order as the original DataFrame (lazy df)

## Examples

Returns unique values from a series

```bash
> [2 2 2 2 2] | dfr into-df | dfr unique
```

Creates a is unique expression from a column

```bash
> col a | unique
```
