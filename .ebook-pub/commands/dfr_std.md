# dfr std

**version**: 0.80.0

## **usage**:

Creates a std expression for an aggregation

## Signature

`> dfr std `

## Examples

Std aggregation for a group-by

```bash
> [[a b]; [one 2] [one 2] [two 1] [two 1]]
    | dfr into-df
    | dfr group-by a
    | dfr agg (dfr col b | dfr std)
```

# dfr std

**version**: 0.80.0

## **usage**:

Aggregates columns to their std value

## Signature

`> dfr std `

## Examples

Std value from columns in a dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | dfr into-df | dfr std
```
