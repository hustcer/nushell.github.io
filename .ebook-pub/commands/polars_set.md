# polars set

**version**: 0.100.1

## **usage**:

Sets value where given mask is true.

## Signature

`> polars set (value) --mask`

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
> let s = ([1 2 2 3 3] | polars into-df | polars shift 2);
    let mask = ($s | polars is-null);
    $s | polars set 0 --mask $mask
```
