# drop

**version**: 0.93.0

## **usage**:

Remove items/rows from the end of the input list/table. Counterpart of `skip`. Opposite of `last`.

## Signature

`> drop (rows)`

## Parameters

- `rows`: The number of items to remove.

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| table       | table       |

## Examples

Remove the last item of a list

```bash
> [0,1,2,3] | drop
```

Remove zero item of a list

```bash
> [0,1,2,3] | drop 0
```

Remove the last two items of a list

```bash
> [0,1,2,3] | drop 2
```

Remove the last row in a table

```bash
> [[a, b]; [1, 2] [3, 4]] | drop 1
```

## Subcommands:

| name                                           | type    | usage                                                                                               |
| ---------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| [`drop column`](/commands/docs/drop_column.md) | Builtin | Remove N columns at the right-hand end of the input table. To remove columns by name, use `reject`. |
| [`drop nth`](/commands/docs/drop_nth.md)       | Builtin | Drop the selected rows.                                                                             |
