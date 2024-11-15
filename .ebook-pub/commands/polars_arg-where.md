# polars arg-where

**version**: 0.100.1

## **usage**:

Creates an expression that returns the arguments where expression is true.

## Signature

`> polars arg-where (column name)`

## Parameters

- `column name`: Expression to evaluate

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Return a dataframe where the value match the expression

```bash
> let df = ([[a b]; [one 1] [two 2] [three 3]] | polars into-df);
    $df | polars select (polars arg-where ((polars col b) >= 2) | polars as b_arg)
```
