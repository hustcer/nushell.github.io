# polars expr-not

**version**: 0.100.1

## **usage**:

Creates a not expression.

## Signature

`> polars expr-not `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates a not expression

```bash
> (polars col a) > 2) | polars expr-not
```

Adds a column showing which values of col a are not greater than 2

```bash
> [[a]; [1] [2] [3] [4] [5]] | polars into-df
                    | polars with-column [(((polars col a) > 2)
                    | polars expr-not
                    | polars as a_expr_not)]
                    | polars collect
                    | polars sort-by a
```
