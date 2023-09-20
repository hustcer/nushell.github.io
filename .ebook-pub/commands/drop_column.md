# drop column

**version**: 0.85.0

## **usage**:

Remove N columns at the right-hand end of the input table. To remove columns by name, use `reject`.

## Signature

`> drop column (columns)`

## Parameters

- `columns`: starting from the end, the number of columns to remove

## Input/output types:

| input | output |
| ----- | ------ |
| table | table  |

## Examples

Remove the last column of a table

```bash
> [[lib, extension]; [nu-lib, rs] [nu-core, rb]] | drop column
```
