# polars str-slice

**version**: 0.100.1

## **usage**:

Slices the string from the start position until the selected length.

## Signature

`> polars str-slice (start) --length`

## Parameters

- `start`: start of slice
- `--length {int}`: optional length

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates slices from the strings in a specified column

```bash
> [[a]; [abcded] [abc321] [abc123]] | polars into-df | polars select (polars col a | polars str-slice 1 --length 2) | polars collect
```

Creates slices from the strings

```bash
> [abcded abc321 abc123] | polars into-df | polars str-slice 1 --length 2
```

Creates slices from the strings without length

```bash
> [abcded abc321 abc123] | polars into-df | polars str-slice 1
```
