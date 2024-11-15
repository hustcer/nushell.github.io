# polars min

**version**: 0.100.1

## **usage**:

Creates a min expression or aggregates columns to their min value.

## Signature

`> polars min `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Min value from columns in a dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]] | polars into-df | polars min
```

Min aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
                | polars into-df
                | polars group-by a
                | polars agg (polars col b | polars min)
                | polars collect
                | polars sort-by a
```
