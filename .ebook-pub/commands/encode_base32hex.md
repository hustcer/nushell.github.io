# encode base32hex

**version**: 0.100.1

## **usage**:

Encode a binary value or a string using base32hex.

## Signature

`> encode base32hex --nopad`

## Parameters

- `--nopad`: Don't pad the output.

## Input/output types:

| input  | output |
| ------ | ------ |
| binary | string |
| string | string |

## Examples

Encode a binary value

```bash
> 0x[57 6E AD] | encode base32hex
```

Encode a string

```bash
> "hello there" | encode base32hex
```

Don't apply padding to the output

```bash
> "hello there" | encode base32hex --nopad
```

## Notes

```text
This command uses an alternative Base32 alphabet, defined in RFC 4648, section 7.

Note this command will collect stream input.
```
