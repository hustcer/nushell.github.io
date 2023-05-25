# dfr min

**version**: 0.80.0

## **usage**:

Creates a min expression

## Signature

`> dfr min `

## Examples

Min aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
    | dfr into-df
    | dfr group-by a
    | dfr agg (dfr col b | dfr min)
```

# dfr min

**version**: 0.80.0

## **usage**:

Aggregates columns to their min value

## Signature

`> dfr min `

## Examples

Min value from columns in a dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]] | dfr into-df | dfr min
```
