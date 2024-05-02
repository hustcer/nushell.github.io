# bytes remove

**version**: 0.93.0

## **usage**:

Remove bytes.

## Signature

`> bytes remove (pattern) ...rest --end --all`

## Parameters

- `pattern`: The pattern to find.
- `...rest`: For a data structure input, remove bytes from data at the given cell paths.
- `--end`: remove from end of binary
- `--all`: remove occurrences of finding binary

## Input/output types:

| input  | output |
| ------ | ------ |
| binary | binary |
| record | record |
| table  | table  |

## Examples

Remove contents

```bash
> 0x[10 AA FF AA FF] | bytes remove 0x[10 AA]
```

Remove all occurrences of find binary in record field

```bash
> { data: 0x[10 AA 10 BB 10] } | bytes remove --all 0x[10] data
```

Remove occurrences of find binary from end

```bash
> 0x[10 AA 10 BB CC AA 10] | bytes remove --end 0x[10]
```

Remove find binary from end not found

```bash
> 0x[10 AA 10 BB CC AA 10] | bytes remove --end 0x[11]
```

Remove all occurrences of find binary in table

```bash
> [[ColA ColB ColC]; [0x[11 12 13] 0x[14 15 16] 0x[17 18 19]]] | bytes remove 0x[11] ColA ColC
```
