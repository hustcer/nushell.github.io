# encode base64

**version**: 0.100.1

## **usage**:

Encode a string or binary value using Base64.

## Signature

`> encode base64 --url --nopad`

## Parameters

- `--url`: Use the URL-safe Base64 version.
- `--nopad`: Don't pad the output.

## Input/output types:

| input  | output |
| ------ | ------ |
| binary | string |
| string | string |

## Examples

Encode a string with Base64

```bash
> "Alphabet from A to Z" | encode base64
```

Encode arbitrary data

```bash
> 0x[BE EE FF] | encode base64
```

Use a URL-safe alphabet

```bash
> 0x[BE EE FF] | encode base64 --url
```

## Notes

```text
The default alphabet is taken from RFC 4648, section 4.  A URL-safe version is available.

Note this command will collect stream input.
```
