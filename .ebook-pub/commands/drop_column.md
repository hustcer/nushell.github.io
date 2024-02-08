# drop column

**version**: 0.90.2

## **usage**:

Remove N columns at the right-hand end of the input table. To remove columns by name, use `reject`.

## Signature

`> drop column (columns)`

## Parameters

- `columns`: Starting from the end, the number of columns to remove.

## Input/output types:

| input  | output |
| ------ | ------ |
| record | record |
| table  | table  |

## Examples

Remove the last column of a table

```bash
> [[lib, extension]; [nu-lib, rs] [nu-core, rb]] | drop column
```

Remove the last column of a record

```bash
> {lib: nu-lib, extension: rs} | drop column
```
