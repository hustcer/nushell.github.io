# polars when

**version**: 0.100.1

## **usage**:

Creates and modifies a when expression.

## Signature

`> polars when (when expression) (then expression)`

## Parameters

- `when expression`: when expression used for matching
- `then expression`: expression that will be applied when predicate is true

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create a when conditions

```bash
> polars when ((polars col a) > 2) 4
```

Create a when conditions

```bash
> polars when ((polars col a) > 2) 4 | polars when ((polars col a) < 0) 6
```

Create a new column for the dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]]
   | polars into-lazy
   | polars with-column (
    polars when ((polars col a) > 2) 4 | polars otherwise 5 | polars as c
     )
   | polars with-column (
    polars when ((polars col a) > 5) 10 | polars when ((polars col a) < 2) 6 | polars otherwise 0 | polars as d
     )
   | polars collect
```
