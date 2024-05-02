# dfr var

**version**: 0.93.0

## **usage**:

Create a var expression for an aggregation.

## Signature

`> dfr var `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Var value from columns in a dataframe or aggregates columns to their var value

```bash
> [[a b]; [6 2] [4 2] [2 2]] | dfr into-df | dfr var
```

Var aggregation for a group-by

```bash
> [[a b]; [one 2] [one 2] [two 1] [two 1]]
    | dfr into-df
    | dfr group-by a
    | dfr agg (dfr col b | dfr var)
```
