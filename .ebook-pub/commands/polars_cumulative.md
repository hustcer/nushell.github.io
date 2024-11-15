# polars cumulative

**version**: 0.100.1

## **usage**:

Cumulative calculation for a column or series.

## Signature

`> polars cumulative (type) --reverse`

## Parameters

- `type`: rolling operation. Values of min, max, and sum are accepted.
- `--reverse`: Reverse cumulative calculation

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Cumulative sum for a column

```bash
> [[a]; [1] [2] [3] [4] [5]]
                    | polars into-df
                    | polars select (polars col a | polars cumulative sum | polars as cum_a)
                    | polars collect
```

Cumulative sum for a series

```bash
> [1 2 3 4 5] | polars into-df | polars cumulative sum
```

Cumulative sum for a series in reverse order

```bash
> [1 2 3 4 5] | polars into-df | polars cumulative sum --reverse
```
