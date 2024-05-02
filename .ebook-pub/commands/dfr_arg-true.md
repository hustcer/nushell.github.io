# dfr arg-true

**version**: 0.93.0

## **usage**:

Returns indexes where values are true.

## Signature

`> dfr arg-true `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns indexes where values are true

```bash
> [false true false] | dfr into-df | dfr arg-true
```
