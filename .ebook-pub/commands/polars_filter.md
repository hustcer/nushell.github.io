# polars filter

**version**: 0.100.1

## **usage**:

Filter dataframe based in expression.

## Signature

`> polars filter (filter expression)`

## Parameters

- `filter expression`: Expression that define the column selection

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Filter dataframe using an expression

```bash
> [[a b]; [6 2] [4 2] [2 2]] | polars into-df | polars filter ((polars col a) >= 4)
```
