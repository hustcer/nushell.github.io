# polars var

**version**: 0.100.1

## **usage**:

Create a var expression for an aggregation.

## Signature

`> polars var `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Var value from columns in a dataframe or aggregates columns to their var value

```bash
> [[a b]; [6 2] [4 2] [2 2]] | polars into-df | polars var | polars collect
```

Var aggregation for a group-by

```bash
> [[a b]; [one 2] [one 2] [two 1] [two 1]]
                    | polars into-df
                    | polars group-by a
                    | polars agg (polars col b | polars var)
                    | polars collect
                    | polars sort-by a
```
