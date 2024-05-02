# bits shr

**version**: 0.93.0

## **usage**:

Bitwise shift right for ints or binary values.

## Signature

`> bits shr (bits) --signed --number-bytes`

## Parameters

- `bits`: number of bits to shift right
- `--signed`: always treat input number as a signed number
- `--number-bytes {int}`: the word size in number of bytes, it can be 1, 2, 4, 8, auto, default value `8`

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| binary         | binary         |
| int            | int            |
| list\<binary\> | list\<binary\> |
| list\<int\>    | list\<int\>    |

## Examples

Shift right a number with 2 bits

```bash
> 8 | bits shr 2
```

Shift right a list of numbers

```bash
> [15 35 2] | bits shr 2
```

Shift right a binary value

```bash
> 0x[4f f4] | bits shr 4
```
