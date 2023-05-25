# dfr mean

**version**: 0.80.0

## **usage**:

Creates a mean expression for an aggregation

## Signature

`> dfr mean `

## Examples

Mean aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
    | dfr into-df
    | dfr group-by a
    | dfr agg (dfr col b | dfr mean)
```

# dfr mean

**version**: 0.80.0

## **usage**:

Aggregates columns to their mean value

## Signature

`> dfr mean `

## Examples

Mean value from columns in a dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | dfr into-df | dfr mean
```
