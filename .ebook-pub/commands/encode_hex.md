# encode hex

**version**: 0.100.1

## **usage**:

Hex encode a binary value or a string.

## Signature

`> encode hex --lower`

## Parameters

- `--lower`: Encode to lowercase hex.

## Input/output types:

| input  | output |
| ------ | ------ |
| binary | string |
| string | string |

## Examples

Encode a binary value

```bash
> 0x[C3 06] | encode hex
```

Encode a string

```bash
> "hello" | encode hex
```

Output a Lowercase version of the encoding

```bash
> 0x[AD EF] | encode hex --lower
```
