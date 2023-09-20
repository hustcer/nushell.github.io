# bits ror

**version**: 0.85.0

## **usage**:

Bitwise rotate right for integers.

## Signature

`> bits ror (bits) --signed --number-bytes`

## Parameters

- `bits`: number of bits to rotate right
- `--signed`: always treat input number as a signed number
- `--number-bytes {string}`: the word size in number of bytes, it can be 1, 2, 4, 8, auto, default value `8`

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| int         | int         |
| list\<int\> | list\<int\> |

## Examples

Rotate right a number with 60 bits

```bash
> 17 | bits ror 60
```

Rotate right a list of numbers of one byte

```bash
> [15 33 92] | bits ror 2 -n '1'
```
