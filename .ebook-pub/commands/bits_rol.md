# bits rol

**version**: 0.100.1

## **usage**:

Bitwise rotate left for ints or binary values.

## Signature

`> bits rol (bits) --signed --number-bytes`

## Parameters

- `bits`: number of bits to rotate left
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

Rotate left a number with 2 bits

```bash
> 17 | bits rol 2
```

Rotate left a list of numbers with 2 bits

```bash
> [5 3 2] | bits rol 2
```

rotate left binary data

```bash
> 0x[c0 ff ee] | bits rol 10
```
