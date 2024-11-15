# polars decimal

**version**: 0.100.1

## **usage**:

Converts a string column into a decimal column

## Signature

`> polars decimal (infer_length)`

## Parameters

- `infer_length`: Number of decimal points to infer

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Modifies strings to decimal

```bash
> [[a b]; [1, '2.4']] | polars into-df | polars select (polars col b | polars decimal 2) | polars collect
```
