# dfr max

**version**: 0.80.0

## **usage**:

Creates a max expression

## Signature

`> dfr max `

## Examples

Max aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
    | dfr into-df
    | dfr group-by a
    | dfr agg (dfr col b | dfr max)
```

# dfr max

**version**: 0.80.0

## **usage**:

Aggregates columns to their max value

## Signature

`> dfr max `

## Examples

Max value from columns in a dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]] | dfr into-df | dfr max
```
