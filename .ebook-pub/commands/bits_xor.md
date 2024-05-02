# bits xor

**version**: 0.93.0

## **usage**:

Performs bitwise xor for ints or binary values.

## Signature

`> bits xor (target) --endian`

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

Apply bits xor to two numbers

```bash
> 2 | bits xor 2
```

Apply bitwise xor to a list of numbers

```bash
> [8 3 2] | bits xor 2
```

Apply bitwise xor to binary data

```bash
> 0x[ca fe] | bits xor 0x[ba be]
```

Apply bitwise xor to binary data of varying lengths with specified endianness

```bash
> 0x[ca fe] | bits xor 0x[aa] --endian big
```

Apply bitwise xor to input binary data smaller than the operand

```bash
> 0x[ff] | bits xor 0x[12 34 56] --endian little
```
