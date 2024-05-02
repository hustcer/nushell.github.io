# bytes length

**version**: 0.93.0

## **usage**:

Output the length of any bytes in the pipeline.

## Signature

`> bytes length ...rest`

## Parameters

- `...rest`: For a data structure input, find the length of data at the given cell paths.

## Input/output types:

| input          | output      |
| -------------- | ----------- |
| binary         | int         |
| list\<binary\> | list\<int\> |
| record         | record      |
| table          | table       |

## Examples

Return the length of a binary

```bash
> 0x[1F FF AA AB] | bytes length
```

Return the lengths of multiple binaries

```bash
> [0x[1F FF AA AB] 0x[1F]] | bytes length
```
