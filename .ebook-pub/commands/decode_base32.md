# decode base32

**version**: 0.100.1

## **usage**:

Decode a Base32 value.

## Signature

`> decode base32 --nopad`

## Parameters

- `--nopad`: Do not pad the output.

## Input/output types:

| input  | output |
| ------ | ------ |
| string | binary |

## Examples

Decode arbitrary binary data

```bash
> "AEBAGBAF" | decode base32
```

Decode an encoded string

```bash
> "NBUQ====" | decode base32 | decode
```

Parse a string without padding

```bash
> "NBUQ" | decode base32 --nopad
```

## Notes

```text
The default alphabet is taken from RFC 4648, section 6.

Note this command will collect stream input.
```
