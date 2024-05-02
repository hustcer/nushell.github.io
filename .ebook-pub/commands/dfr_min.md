# dfr min

**version**: 0.93.0

## **usage**:

Creates a min expression or aggregates columns to their min value.

## Signature

`> dfr min `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Min value from columns in a dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]] | dfr into-df | dfr min
```

Min aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
    | dfr into-df
    | dfr group-by a
    | dfr agg (dfr col b | dfr min)
```
