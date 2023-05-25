# bytes index-of

**version**: 0.80.0

## **usage**:

Returns start index of first occurrence of pattern in bytes, or -1 if no match.

## Signature

`> bytes index-of (pattern) ...rest --all --end`

## Parameters

- `pattern`: the pattern to find index of
- `...rest`: for a data structure input, find the indexes at the given cell paths
- `--all`: returns all matched index
- `--end`: search from the end of the binary

## Examples

Returns index of pattern in bytes

```bash
>  0x[33 44 55 10 01 13 44 55] | bytes index-of 0x[44 55]
```

Returns index of pattern, search from end

```bash
>  0x[33 44 55 10 01 13 44 55] | bytes index-of -e 0x[44 55]
```

Returns all matched index

```bash
>  0x[33 44 55 10 01 33 44 33 44] | bytes index-of -a 0x[33 44]
```

Returns all matched index, searching from end

```bash
>  0x[33 44 55 10 01 33 44 33 44] | bytes index-of -a -e 0x[33 44]
```

Returns index of pattern for specific column

```bash
>  [[ColA ColB ColC]; [0x[11 12 13] 0x[14 15 16] 0x[17 18 19]]] | bytes index-of 0x[11] ColA ColC
```
