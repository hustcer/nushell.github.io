# dfr when

**version**: 0.85.0

## **usage**:

Creates and modifies a when expression.

## Signature

`> dfr when (when expression) (then expression)`

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
> dfr when ((dfr col a) > 2) 4
```

Create a when conditions

```bash
> dfr when ((dfr col a) > 2) 4 | dfr when ((dfr col a) < 0) 6
```

Create a new column for the dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]]
   | dfr into-lazy
   | dfr with-column (
    dfr when ((dfr col a) > 2) 4 | dfr otherwise 5 | dfr as c
     )
   | dfr with-column (
    dfr when ((dfr col a) > 5) 10 | dfr when ((dfr col a) < 2) 6 | dfr otherwise 0 | dfr as d
     )
   | dfr collect
```
