# dfr set

**version**: 0.93.0

## **usage**:

Sets value where given mask is true.

## Signature

`> dfr set (value) --mask`

## Parameters

- `value`: value to be inserted in series
- `--mask {any}`: mask indicating insertions

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Shifts the values by a given period

```bash
> let s = ([1 2 2 3 3] | dfr into-df | dfr shift 2);
    let mask = ($s | dfr is-null);
    $s | dfr set 0 --mask $mask
```
