# polars select

**version**: 0.100.1

## **usage**:

Selects columns from lazyframe.

## Signature

`> polars select ...rest`

## Parameters

- `...rest`: Expression(s) that define the column selection

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Select a column from the dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | polars into-df | polars select a
```
