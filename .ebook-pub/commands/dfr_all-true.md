# dfr all-true

**version**: 0.80.0

## **usage**:

Returns true if all values are true.

## Signature

`> dfr all-true `

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
