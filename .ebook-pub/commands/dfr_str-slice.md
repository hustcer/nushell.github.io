# dfr str-slice

**version**: 0.85.0

## **usage**:

Slices the string from the start position until the selected length.

## Signature

`> dfr str-slice (start) --length`

## Parameters

- `start`: start of slice
- `--length {int}`: optional length

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates slices from the strings

```bash
> [abcded abc321 abc123] | dfr into-df | dfr str-slice 1 -l 2
```
