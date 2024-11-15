# polars as

**version**: 0.100.1

## **usage**:

Creates an alias expression.

## Signature

`> polars as (Alias name)`

## Parameters

- `Alias name`: Alias name for the expression

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates and alias expression

```bash
> polars col a | polars as new_a | polars into-nu
```
