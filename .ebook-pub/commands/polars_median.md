# polars median

**version**: 0.100.1

## **usage**:

Median value from columns in a dataframe or creates expression for an aggregation

## Signature

`> polars median `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Median aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
                    | polars into-df
                    | polars group-by a
                    | polars agg (polars col b | polars median)
                    | polars collect
                    | polars sort-by a
```

Median value from columns in a dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | polars into-df | polars median | polars collect
```
