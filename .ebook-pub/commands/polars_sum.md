# polars sum

**version**: 0.100.1

## **usage**:

Creates a sum expression for an aggregation or aggregates columns to their sum value.

## Signature

`> polars sum `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Sums all columns in a dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]] | polars into-df | polars sum | polars collect
```

Sum aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
                    | polars into-df
                    | polars group-by a
                    | polars agg (polars col b | polars sum)
                    | polars collect
                    | polars sort-by a
```
