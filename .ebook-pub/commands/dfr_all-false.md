# dfr all-false

**version**: 0.93.0

## **usage**:

Returns true if all values are false.

## Signature

`> dfr all-false `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns true if all values are false

```bash
> [false false false] | dfr into-df | dfr all-false
```

Checks the result from a comparison

```bash
> let s = ([5 6 2 10] | dfr into-df);
    let res = ($s > 9);
    $res | dfr all-false
```
