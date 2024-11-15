# polars fill-null

**version**: 0.100.1

## **usage**:

Replaces NULL values with the given expression.

## Signature

`> polars fill-null (fill)`

## Parameters

- `fill`: Expression to use to fill the null values

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Fills the null values by 0

```bash
> [1 2 2 3 3] | polars into-df | polars shift 2 | polars fill-null 0
```
