# polars cast

**version**: 0.100.1

## **usage**:

Cast a column to a different dtype.

## Signature

`> polars cast (dtype) (column)`

## Parameters

- `dtype`: The dtype to cast the column to
- `column`: The column to cast. Required when used with a dataframe.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Cast a column in a dataframe to a different dtype

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars cast u8 a | polars schema
```

Cast a column in a lazy dataframe to a different dtype

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars into-lazy | polars cast u8 a | polars schema
```

Cast a column in a expression to a different dtype

```bash
> [[a b]; [1 2] [1 4]] | polars into-df | polars group-by a | polars agg [ (polars col b | polars cast u8 | polars min | polars as "b_min") ] | polars schema
```
