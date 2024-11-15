# decode base64

**version**: 0.100.1

## **usage**:

Decode a Base64 value.

## Signature

`> decode base64 --url --nopad`

## Parameters

- `--url`: Decode the URL-safe Base64 version.
- `--nopad`: Reject padding.

## Input/output types:

| input  | output |
| ------ | ------ |
| string | binary |

## Examples

Decode a Base64 string

```bash
> "U29tZSBEYXRh" | decode base64 | decode
```

Decode arbitrary data

```bash
> "/w==" | decode base64
```

Decode a URL-safe Base64 string

```bash
> "_w==" | decode base64 --url
```

## Notes

```text
The default alphabet is taken from RFC 4648, section 4.  A URL-safe version is available.

Note this command will collect stream input.
```
