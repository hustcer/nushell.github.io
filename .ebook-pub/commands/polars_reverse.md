# polars reverse

**version**: 0.100.1

## **usage**:

Reverses the LazyFrame

## Signature

`> polars reverse `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Reverses the dataframe.

```bash
> [[a b]; [6 2] [4 2] [2 2]] | polars into-df | polars reverse
```
