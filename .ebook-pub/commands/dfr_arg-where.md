# dfr arg-where

**version**: 0.93.0

## **usage**:

Creates an expression that returns the arguments where expression is true.

## Signature

`> dfr arg-where (column name)`

## Parameters

- `column name`: Expression to evaluate

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Return a dataframe where the value match the expression

```bash
> let df = ([[a b]; [one 1] [two 2] [three 3]] | dfr into-df);
    $df | dfr select (dfr arg-where ((dfr col b) >= 2) | dfr as b_arg)
```
