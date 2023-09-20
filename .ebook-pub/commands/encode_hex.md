# encode hex

**version**: 0.85.0

## **usage**:

Encode a binary value using hex.

## Signature

`> encode hex ...rest`

## Parameters

- `...rest`: For a data structure input, encode data at the given cell paths

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| binary         | string         |
| list\<binary\> | list\<string\> |
| record         | record         |
| table          | table          |

## Examples

Encode binary data

```bash
> 0x[09 F9 11 02 9D 74 E3 5B D8 41 56 C5 63 56 88 C0] | encode hex
```
