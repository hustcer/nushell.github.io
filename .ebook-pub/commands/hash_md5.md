# hash md5

**version**: 0.80.0

## **usage**:

Hash a value using the md5 hash algorithm

## Signature

`> hash md5 ...rest --binary`

## Parameters

- `...rest`: optionally md5 hash data by cell path
- `--binary`: Output binary instead of hexadecimal representation

## Examples

Return the md5 hash of a string, hex-encoded

```bash
> 'abcdefghijklmnopqrstuvwxyz' | hash md5
```

Return the md5 hash of a string, as binary

```bash
> 'abcdefghijklmnopqrstuvwxyz' | hash md5 --binary
```

Return the md5 hash of a file's contents

```bash
> open ./nu_0_24_1_windows.zip | hash md5
```
