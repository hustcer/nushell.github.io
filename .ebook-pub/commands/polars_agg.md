# polars agg

**version**: 0.100.1

## **usage**:

Performs a series of aggregations from a group-by.

## Signature

`> polars agg ...rest`

## Parameters

- `...rest`: Expression(s) that define the aggregations to be applied

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Group by and perform an aggregation

```bash
> [[a b]; [1 2] [1 4] [2 6] [2 4]]
                | polars into-lazy
                | polars group-by a
                | polars agg [
                    (polars col b | polars min | polars as "b_min")
                    (polars col b | polars max | polars as "b_max")
                    (polars col b | polars sum | polars as "b_sum")
                 ]
                | polars collect
                | polars sort-by a
```
