# encode base32

**version**: 0.100.1

## **usage**:

Encode a string or binary value using Base32.

## Signature

`> encode base32 --nopad`

## Parameters

- `--nopad`: Don't accept padding.

## Input/output types:

| input  | output |
| ------ | ------ |
| binary | string |
| string | string |

## Examples

Encode a binary value

```bash
> 0x[01 02 10] | encode base32
```

Encode a string

```bash
> "hello there" | encode base32
```

Don't apply padding to the output

```bash
> "hi" | encode base32 --nopad
```

## Notes

```text
The default alphabet is taken from RFC 4648, section 6.

Note this command will collect stream input.
```
