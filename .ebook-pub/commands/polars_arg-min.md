# polars arg-min

**version**: 0.100.1

## **usage**:

Return index for min value in series.

## Signature

`> polars arg-min `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns index for min value

```bash
> [1 3 2] | polars into-df | polars arg-min
```
