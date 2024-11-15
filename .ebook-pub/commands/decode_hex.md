# decode hex

**version**: 0.100.1

## **usage**:

Hex decode a value.

## Signature

`> decode hex `

## Input/output types:

| input  | output |
| ------ | ------ |
| string | binary |

## Examples

Decode arbitrary binary data

```bash
> "09FD" | decode hex
```

Lowercase Hex is also accepted

```bash
> "09fd" | decode hex
```
