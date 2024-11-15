# bits ror

**version**: 0.100.1

## **usage**:

Bitwise rotate right for ints or binary values.

## Signature

`> bits ror (bits) --signed --number-bytes`

## Parameters

- `bits`: number of bits to rotate right
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

rotate right a number with 2 bits

```bash
> 17 | bits ror 2
```

rotate right a list of numbers of two bytes

```bash
> [15 33 92] | bits ror 2 --number-bytes 2
```

rotate right binary data

```bash
> 0x[ff bb 03] | bits ror 10
```
