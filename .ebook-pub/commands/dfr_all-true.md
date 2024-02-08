# dfr all-true

**version**: 0.90.2

## **usage**:

Returns true if all values are true.

## Signature

`> dfr all-true `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns true if all values are true

```bash
> [true true true] | dfr into-df | dfr all-true
```

Checks the result from a comparison

```bash
> let s = ([5 6 2 8] | dfr into-df);
    let res = ($s > 9);
    $res | dfr all-true
```
