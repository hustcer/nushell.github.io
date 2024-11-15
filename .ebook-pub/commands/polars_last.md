# polars last

**version**: 0.100.1

## **usage**:

Creates new dataframe with tail rows or creates a last expression.

## Signature

`> polars last (rows)`

## Parameters

- `rows`: Number of rows for tail

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create new dataframe with last rows

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars last 1
```

Creates a last expression from a column

```bash
> polars col a | polars last
```
