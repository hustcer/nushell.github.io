# bytes reverse

**version**: 0.90.2

## **usage**:

Reverse the bytes in the pipeline.

## Signature

`> bytes reverse ...rest`

## Parameters

- `...rest`: For a data structure input, reverse data at the given cell paths.

## Input/output types:

| input  | output |
| ------ | ------ |
| binary | binary |
| record | record |
| table  | table  |

## Examples

Reverse bytes `0x[1F FF AA AA]`

```bash
> 0x[1F FF AA AA] | bytes reverse
```

Reverse bytes `0x[FF AA AA]`

```bash
> 0x[FF AA AA] | bytes reverse
```
