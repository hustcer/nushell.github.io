# dfr sum

**version**: 0.80.0

## **usage**:

Creates a sum expression for an aggregation

## Signature

`> dfr sum `

## Examples

Sum aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
    | dfr into-df
    | dfr group-by a
    | dfr agg (dfr col b | dfr sum)
```

# dfr sum

**version**: 0.80.0

## **usage**:

Aggregates columns to their sum value

## Signature

`> dfr sum `

## Examples

Sums all columns in a dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]] | dfr into-df | dfr sum
```
