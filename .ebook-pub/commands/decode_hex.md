# decode hex

**version**: 0.90.2

## **usage**:

Hex decode a value.

## Signature

`> decode hex ...rest`

## Parameters

- `...rest`: For a data structure input, decode data at the given cell paths

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<binary\> |
| record         | record         |
| string         | binary         |
| table          | table          |

## Examples

Hex decode a value and output as binary

```bash
> '0102030A0a0B' | decode hex
```

Whitespaces are allowed to be between hex digits

```bash
> '01 02  03 0A 0a 0B' | decode hex
```
