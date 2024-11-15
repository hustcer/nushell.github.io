# polars count

**version**: 0.100.1

## **usage**:

Returns the number of non-null values in the column.

## Signature

`> polars count `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Count the number of non-null values in a column

```bash
> [[a]; ["foo"] ["bar"] [null]] | polars into-df
                    | polars select (polars col a | polars count)
                    | polars collect
```
