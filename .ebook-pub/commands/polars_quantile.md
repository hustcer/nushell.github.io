# polars quantile

**version**: 0.100.1

## **usage**:

Aggregates the columns to the selected quantile.

## Signature

`> polars quantile (quantile)`

## Parameters

- `quantile`: quantile value for quantile operation

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

quantile value from columns in a dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]] | polars into-df | polars quantile 0.5
```

Quantile aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
                    | polars into-df
                    | polars group-by a
                    | polars agg (polars col b | polars quantile 0.5)
                    | polars collect
                    | polars sort-by a
```
