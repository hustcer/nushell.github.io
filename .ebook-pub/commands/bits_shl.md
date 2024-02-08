# bits shl

**version**: 0.90.2

## **usage**:

Bitwise shift left for ints.

## Signature

`> bits shl (bits) --signed --number-bytes`

## Parameters

- `bits`: number of bits to shift left
- `--signed`: always treat input number as a signed number
- `--number-bytes {string}`: the word size in number of bytes, it can be 1, 2, 4, 8, auto, default value `8`

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| int         | int         |
| list\<int\> | list\<int\> |

## Examples

Shift left a number by 7 bits

```bash
> 2 | bits shl 7
```

Shift left a number with 1 byte by 7 bits

```bash
> 2 | bits shl 7 --number-bytes '1'
```

Shift left a signed number by 1 bit

```bash
> 0x7F | bits shl 1 --signed
```

Shift left a list of numbers

```bash
> [5 3 2] | bits shl 2
```
