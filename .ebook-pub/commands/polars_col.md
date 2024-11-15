# polars col

**version**: 0.100.1

## **usage**:

Creates a named column expression.

## Signature

`> polars col (column name)`

## Parameters

- `column name`: Name of column to be used. '\*' can be used for all columns.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates a named column expression and converts it to a nu object

```bash
> polars col a | polars into-nu
```

Select all columns using the asterisk wildcard.

```bash
> [[a b]; [x 1] [y 2] [z 3]] | polars into-df | polars select (polars col '*') | polars collect
```
