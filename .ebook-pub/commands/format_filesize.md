# format filesize

**version**: 0.85.0

## **usage**:

Converts a column of filesizes to some specified format.

## Signature

`> format filesize (format value) ...rest`

## Parameters

- `format value`: the format into which convert the file sizes
- `...rest`: For a data structure input, format filesizes at the given cell paths

## Input/output types:

| input    | output |
| -------- | ------ |
| filesize | string |
| record   | record |
| table    | table  |

## Examples

Convert the size column to KB

```bash
> ls | format filesize KB size
```

Convert the apparent column to B

```bash
> du | format filesize B apparent
```

Convert the size data to MB

```bash
> 4Gb | format filesize MB
```
