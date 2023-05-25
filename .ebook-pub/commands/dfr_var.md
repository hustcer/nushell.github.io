# dfr var

**version**: 0.80.0

## **usage**:

Create a var expression for an aggregation

## Signature

`> dfr var `

## Examples

Var aggregation for a group-by

```bash
> [[a b]; [one 2] [one 2] [two 1] [two 1]]
    | dfr into-df
    | dfr group-by a
    | dfr agg (dfr col b | dfr var)
```

# dfr var

**version**: 0.80.0

## **usage**:

Aggregates columns to their var value

## Signature

`> dfr var `

## Examples

Var value from columns in a dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | dfr into-df | dfr var
```
