# polars len

**version**: 0.100.1

## **usage**:

Return the number of rows in the context. This is similar to COUNT(\*) in SQL.

## Signature

`> polars len `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Count the number of rows in the the dataframe.

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars select (polars len) | polars collect
```

Creates a last expression from a column

```bash
> polars col a | polars last
```
