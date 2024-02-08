# dfr otherwise

**version**: 0.90.2

## **usage**:

Completes a when expression.

## Signature

`> dfr otherwise (otherwise expression)`

## Parameters

- `otherwise expression`: expression to apply when no when predicate matches

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create a when conditions

```bash
> dfr when ((dfr col a) > 2) 4 | dfr otherwise 5
```

Create a when conditions

```bash
> dfr when ((dfr col a) > 2) 4 | dfr when ((dfr col a) < 0) 6 | dfr otherwise 0
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
