# polars std

**version**: 0.100.1

## **usage**:

Creates a std expression for an aggregation of std value from columns in a dataframe.

## Signature

`> polars std `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Std value from columns in a dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | polars into-df | polars std | polars collect
```

Std aggregation for a group-by

```bash
> [[a b]; [one 2] [one 2] [two 1] [two 1]]
            | polars into-df
            | polars group-by a
            | polars agg (polars col b | polars std)
            | polars collect
            | polars sort-by a
```
