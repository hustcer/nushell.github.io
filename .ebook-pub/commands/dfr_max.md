# dfr max

**version**: 0.93.0

## **usage**:

Creates a max expression or aggregates columns to their max value.

## Signature

`> dfr max `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Max value from columns in a dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]] | dfr into-df | dfr max
```

Max aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
    | dfr into-df
    | dfr group-by a
    | dfr agg (dfr col b | dfr max)
```
