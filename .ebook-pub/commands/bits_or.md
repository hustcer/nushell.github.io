# bits or

**version**: 0.100.1

## **usage**:

Performs bitwise or for ints or binary values.

## Signature

`> bits or (target) --endian`

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

Apply bits or to two numbers

```bash
> 2 | bits or 6
```

Apply bitwise or to a list of numbers

```bash
> [8 3 2] | bits or 2
```

Apply bitwise or to binary data

```bash
> 0x[88 cc] | bits or 0x[42 32]
```

Apply bitwise or to binary data of varying lengths with specified endianness

```bash
> 0x[c0 ff ee] | bits or 0x[ff] --endian big
```

Apply bitwise or to input binary data smaller than the operor

```bash
> 0x[ff] | bits or 0x[12 34 56] --endian little
```
