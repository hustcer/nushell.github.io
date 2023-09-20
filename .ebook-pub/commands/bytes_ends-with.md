# bytes ends-with

**version**: 0.85.0

## **usage**:

Check if bytes ends with a pattern.

## Signature

`> bytes ends-with (pattern) ...rest`

## Parameters

- `pattern`: the pattern to match
- `...rest`: for a data structure input, check if bytes at the given cell paths end with the pattern

## Input/output types:

| input  | output |
| ------ | ------ |
| binary | bool   |
| record | record |
| table  | table  |

## Examples

Checks if binary ends with `0x[AA]`

```bash
> 0x[1F FF AA AA] | bytes ends-with 0x[AA]
```

Checks if binary ends with `0x[FF AA AA]`

```bash
> 0x[1F FF AA AA] | bytes ends-with 0x[FF AA AA]
```

Checks if binary ends with `0x[11]`

```bash
> 0x[1F FF AA AA] | bytes ends-with 0x[11]
```
