# dfr arg-unique

**version**: 0.90.2

## **usage**:

Returns indexes for unique values.

## Signature

`> dfr arg-unique `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns indexes for unique values

```bash
> [1 2 2 3 3] | dfr into-df | dfr arg-unique
```
