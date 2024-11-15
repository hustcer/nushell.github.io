# polars lit

**version**: 0.100.1

## **usage**:

Creates a literal expression.

## Signature

`> polars lit (literal)`

## Parameters

- `literal`: literal to construct the expression

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Created a literal expression and converts it to a nu object

```bash
> polars lit 2 | polars into-nu
```
