# bits shl

**version**: 0.93.0

## **usage**:

Bitwise shift left for ints or binary values.

## Signature

`> bits shl (bits) --signed --number-bytes`

## Parameters

- `bits`: number of bits to shift left
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

Shift left a number by 7 bits

```bash
> 2 | bits shl 7
```

Shift left a number with 2 byte by 7 bits

```bash
> 2 | bits shl 7 --number-bytes 2
```

Shift left a signed number by 1 bit

```bash
> 0x7F | bits shl 1 --signed
```

Shift left a list of numbers

```bash
> [5 3 2] | bits shl 2
```

Shift left a binary value

```bash
> 0x[4f f4] | bits shl 4
```
