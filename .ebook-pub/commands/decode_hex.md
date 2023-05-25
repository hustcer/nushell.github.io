# decode hex

**version**: 0.80.0

## **usage**:

Hex decode a value.

## Signature

`> decode hex ...rest`

## Parameters

- `...rest`: For a data structure input, decode data at the given cell paths

## Examples

Hex decode a value and output as binary

```bash
> '0102030A0a0B' | decode hex
```

Whitespaces are allowed to be between hex digits

```bash
> '01 02  03 0A 0a 0B' | decode hex
```
