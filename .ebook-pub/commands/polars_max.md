# polars max

**version**: 0.100.1

## **usage**:

Creates a max expression or aggregates columns to their max value.

## Signature

`> polars max `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Max value from columns in a dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]] | polars into-df | polars max
```

Max aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
                | polars into-df
                | polars group-by a
                | polars agg (polars col b | polars max)
                | polars collect
                | polars sort-by a
```
