# polars mean

**version**: 0.100.1

## **usage**:

Creates a mean expression for an aggregation or aggregates columns to their mean value.

## Signature

`> polars mean `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Mean value from columns in a dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | polars into-df | polars mean
```

Mean aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
                | polars into-df
                | polars group-by a
                | polars agg (polars col b | polars mean)
                | polars collect
                | polars sort-by a
```
