# polars arg-max

**version**: 0.100.1

## **usage**:

Return index for max value in series.

## Signature

`> polars arg-max `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns index for max value

```bash
> [1 3 2] | polars into-df | polars arg-max
```
