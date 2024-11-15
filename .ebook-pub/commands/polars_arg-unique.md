# polars arg-unique

**version**: 0.100.1

## **usage**:

Returns indexes for unique values.

## Signature

`> polars arg-unique `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns indexes for unique values

```bash
> [1 2 2 3 3] | polars into-df | polars arg-unique
```
