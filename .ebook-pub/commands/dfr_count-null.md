# dfr count-null

**version**: 0.93.0

## **usage**:

Counts null values.

## Signature

`> dfr count-null `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Counts null values

```bash
> let s = ([1 1 0 0 3 3 4] | dfr into-df);
    ($s / $s) | dfr count-null
```
