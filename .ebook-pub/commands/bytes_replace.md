# bytes replace

**version**: 0.100.1

## **usage**:

Find and replace binary.

## Signature

`> bytes replace (find) (replace) ...rest --all`

## Parameters

- `find`: The pattern to find.
- `replace`: The replacement pattern.
- `...rest`: For a data structure input, replace bytes in data at the given cell paths.
- `--all`: replace all occurrences of find binary

## Input/output types:

| input  | output |
| ------ | ------ |
| binary | binary |
| record | record |
| table  | table  |

## Examples

Find and replace contents

```bash
> 0x[10 AA FF AA FF] | bytes replace 0x[10 AA] 0x[FF]
```

Find and replace all occurrences of find binary

```bash
> 0x[10 AA 10 BB 10] | bytes replace --all 0x[10] 0x[A0]
```

Find and replace all occurrences of find binary in table

```bash
> [[ColA ColB ColC]; [0x[11 12 13] 0x[14 15 16] 0x[17 18 19]]] | bytes replace --all 0x[11] 0x[13] ColA ColC
```
