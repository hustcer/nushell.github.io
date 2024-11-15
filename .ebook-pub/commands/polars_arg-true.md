# polars arg-true

**version**: 0.100.1

## **usage**:

Returns indexes where values are true.

## Signature

`> polars arg-true `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns indexes where values are true

```bash
> [false true false] | polars into-df | polars arg-true
```
