# dfr group-by

**version**: 0.85.0

## **usage**:

Creates a group-by object that can be used for other aggregations.

## Signature

`> dfr group-by ...rest`

## Parameters

- `...rest`: Expression(s) that define the lazy group-by

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Group by and perform an aggregation

```bash
> [[a b]; [1 2] [1 4] [2 6] [2 4]]
    | dfr into-df
    | dfr group-by a
    | dfr agg [
        (dfr col b | dfr min | dfr as "b_min")
        (dfr col b | dfr max | dfr as "b_max")
        (dfr col b | dfr sum | dfr as "b_sum")
     ]
```

Group by and perform an aggregation

```bash
> [[a b]; [1 2] [1 4] [2 6] [2 4]]
    | dfr into-lazy
    | dfr group-by a
    | dfr agg [
        (dfr col b | dfr min | dfr as "b_min")
        (dfr col b | dfr max | dfr as "b_max")
        (dfr col b | dfr sum | dfr as "b_sum")
     ]
    | dfr collect
```
