# polars unique

**version**: 0.100.1

## **usage**:

Returns unique values from a dataframe.

## Signature

`> polars unique --subset --last --maintain-order`

## Parameters

- `--subset {any}`: Subset of column(s) to use to maintain rows (lazy df)
- `--last`: Keeps last unique value. Default keeps first value (lazy df)
- `--maintain-order`: Keep the same order as the original DataFrame (lazy df)

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns unique values from a series

```bash
> [2 2 2 2 2] | polars into-df | polars unique
```

Returns unique values in a subset of lazyframe columns

```bash
> [[a b c]; [1 2 1] [2 2 2] [3 2 1]] | polars into-lazy | polars unique --subset [b c] | polars collect
```

Returns unique values in a subset of lazyframe columns

```bash
> [[a b c]; [1 2 1] [2 2 2] [3 2 1]]
    | polars into-lazy
    | polars unique --subset [b c] --last
    | polars collect
```

Creates a is unique expression from a column

```bash
> col a | unique
```
