# dfr quantile

**version**: 0.80.0

## **usage**:

Aggregates the columns to the selected quantile.

## Signature

`> dfr quantile (quantile)`

## Parameters

- `quantile`: quantile value for quantile operation

## Examples

Quantile aggregation for a group-by

```bash
> [[a b]; [one 2] [one 4] [two 1]]
    | dfr into-df
    | dfr group-by a
    | dfr agg (dfr col b | dfr quantile 0.5)
```

# dfr quantile

**version**: 0.80.0

## **usage**:

Aggregates the columns to the selected quantile.

## Signature

`> dfr quantile (quantile)`

## Parameters

- `quantile`: quantile value for quantile operation

## Examples

quantile value from columns in a dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]] | dfr into-df | dfr quantile 0.5
```
