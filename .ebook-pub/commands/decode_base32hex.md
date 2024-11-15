# decode base32hex

**version**: 0.100.1

## **usage**:

Encode a base32hex value.

## Signature

`> decode base32hex --nopad`

## Parameters

- `--nopad`: Reject input with padding.

## Input/output types:

| input  | output |
| ------ | ------ |
| string | binary |

## Examples

Decode arbitrary binary data

```bash
> "ATNAQ===" | decode base32hex
```

Decode an encoded string

```bash
> "D1KG====" | decode base32hex | decode
```

Parse a string without padding

```bash
> "ATNAQ" | decode base32hex --nopad
```

## Notes

```text
This command uses an alternative Base32 alphabet, defined in RFC 4648, section 7.

Note this command will collect stream input.
```
