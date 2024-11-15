# bits not

**version**: 0.100.1

## **usage**:

Performs logical negation on each bit.

## Signature

`> bits not --signed --number-bytes`

## Parameters

- `--signed`: always treat input number as a signed number
- `--number-bytes {int}`: the size of unsigned number in bytes, it can be 1, 2, 4, 8, auto

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| binary         | binary         |
| int            | int            |
| list\<binary\> | list\<binary\> |
| list\<int\>    | list\<int\>    |

## Examples

Apply logical negation to a list of numbers

```bash
> [4 3 2] | bits not
```

Apply logical negation to a list of numbers, treat input as 2 bytes number

```bash
> [4 3 2] | bits not --number-bytes 2
```

Apply logical negation to a list of numbers, treat input as signed number

```bash
> [4 3 2] | bits not --signed
```

Apply logical negation to binary data

```bash
> 0x[ff 00 7f] | bits not
```
