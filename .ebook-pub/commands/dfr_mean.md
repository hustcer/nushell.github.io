# dfr mean

**version**: 0.90.2

## **usage**:

Creates a mean expression for an aggregation or aggregates columns to their mean value.

## Signature

`> dfr mean `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Mean value from columns in a dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | dfr into-df | dfr mean
```

Mean aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
    | dfr into-df
    | dfr group-by a
    | dfr agg (dfr col b | dfr mean)
```
