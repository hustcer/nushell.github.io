# bytes at

**version**: 0.80.0

## **usage**:

Get bytes defined by a range

## Signature

`> bytes at (range) ...rest`

## Parameters

- `range`: the range to get bytes
- `...rest`: for a data structure input, get bytes from data at the given cell paths

## Examples

Get a subbytes `0x[10 01]` from the bytes `0x[33 44 55 10 01 13]`

```bash
>  0x[33 44 55 10 01 13] | bytes at 3..<4
```

Get a subbytes `0x[10 01 13]` from the bytes `0x[33 44 55 10 01 13]`

```bash
>  0x[33 44 55 10 01 13] | bytes at 3..6
```

Get the remaining characters from a starting index

```bash
>  0x[33 44 55 10 01 13] | bytes at 3..
```

Get the characters from the beginning until ending index

```bash
>  0x[33 44 55 10 01 13] | bytes at ..<4
```

Or the characters from the beginning until ending index inside a table

```bash
>  [[ColA ColB ColC]; [0x[11 12 13] 0x[14 15 16] 0x[17 18 19]]] | bytes at 1.. ColB ColC
```
