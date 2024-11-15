# bits and

**version**: 0.100.1

## **usage**:

Performs bitwise and for ints or binary values.

## Signature

`> bits and (target) --endian`

## Parameters

- `target`: right-hand side of the operation
- `--endian {string}`: byte encode endian, available options: native(default), little, big

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| binary         | binary         |
| int            | int            |
| list\<binary\> | list\<binary\> |
| list\<int\>    | list\<int\>    |

## Examples

Apply bitwise and to two numbers

```bash
> 2 | bits and 2
```

Apply bitwise and to two binary values

```bash
> 0x[ab cd] | bits and 0x[99 99]
```

Apply bitwise and to a list of numbers

```bash
> [4 3 2] | bits and 2
```

Apply bitwise and to a list of binary data

```bash
> [0x[7f ff] 0x[ff f0]] | bits and 0x[99 99]
```

Apply bitwise and to binary data of varying lengths with specified endianness

```bash
> 0x[c0 ff ee] | bits and 0x[ff] --endian big
```

Apply bitwise and to input binary data smaller than the operand

```bash
> 0x[ff] | bits and 0x[12 34 56] --endian little
```
