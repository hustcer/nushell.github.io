# drop column

**version**: 0.80.0

## **usage**:

Remove N columns at the right-hand end of the input table. To remove columns by name, use `reject`.

## Signature

`> drop column (columns)`

## Parameters

- `columns`: starting from the end, the number of columns to remove

## Examples

Remove the last column of a table

```bash
> [[lib, extension]; [nu-lib, rs] [nu-core, rb]] | drop column
```
