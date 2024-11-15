# hash sha256

**version**: 0.100.1

## **usage**:

Hash a value using the sha256 hash algorithm.

## Signature

`> hash sha256 ...rest --binary`

## Parameters

- `...rest`: Optionally sha256 hash data by cell path.
- `--binary`: Output binary instead of hexadecimal representation

## Input/output types:

| input  | output |
| ------ | ------ |
| binary | any    |
| record | record |
| string | any    |
| table  | table  |

## Examples

Return the sha256 hash of a string, hex-encoded

```bash
> 'abcdefghijklmnopqrstuvwxyz' | hash sha256
```

Return the sha256 hash of a string, as binary

```bash
> 'abcdefghijklmnopqrstuvwxyz' | hash sha256 --binary
```

Return the sha256 hash of a file's contents

```bash
> open ./nu_0_24_1_windows.zip | hash sha256
```
