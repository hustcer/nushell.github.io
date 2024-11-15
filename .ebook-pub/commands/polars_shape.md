# polars shape

**version**: 0.100.1

## **usage**:

Shows column and row size for a dataframe.

## Signature

`> polars shape `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Shows row and column shape

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars shape
```
