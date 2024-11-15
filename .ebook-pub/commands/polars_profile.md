# polars profile

**version**: 0.100.1

## **usage**:

Profile a lazy dataframe. This will run the query and return a record containing the materialized DataFrame and a DataFrame that contains profiling information of each node that is executed.

The units of the timings are microseconds.

## Signature

`> polars profile `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Profile a lazy dataframe

```bash
> [[a b]; [1 2] [1 4] [2 6] [2 4]]
    | polars into-lazy
    | polars group-by a
    | polars agg [
        (polars col b | polars min | polars as "b_min")
        (polars col b | polars max | polars as "b_max")
        (polars col b | polars sum | polars as "b_sum")
     ]
    | polars profile

```
