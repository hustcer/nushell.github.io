# bytes add

**version**: 0.90.2

## **usage**:

Add specified bytes to the input.

## Signature

`> bytes add (data) ...rest --index --end`

## Parameters

- `data`: The binary to add.
- `...rest`: For a data structure input, add bytes to the data at the given cell paths.
- `--index {int}`: index to insert binary data
- `--end`: add to the end of binary

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| binary         | binary         |
| list\<binary\> | list\<binary\> |
| record         | record         |
| table          | table          |

## Examples

Add bytes `0x[AA]` to `0x[1F FF AA AA]`

```bash
> 0x[1F FF AA AA] | bytes add 0x[AA]
```

Add bytes `0x[AA BB]` to `0x[1F FF AA AA]` at index 1

```bash
> 0x[1F FF AA AA] | bytes add 0x[AA BB] --index 1
```

Add bytes `0x[11]` to `0x[FF AA AA]` at the end

```bash
> 0x[FF AA AA] | bytes add 0x[11] --end
```

Add bytes `0x[11 22 33]` to `0x[FF AA AA]` at the end, at index 1(the index is start from end)

```bash
> 0x[FF AA BB] | bytes add 0x[11 22 33] --end --index 1
```
