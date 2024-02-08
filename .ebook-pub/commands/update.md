# update

**version**: 0.90.2

## **usage**:

Update an existing column to have a new value.

## Signature

`> update (field) (replacement value)`

## Parameters

- `field`: The name of the column to update.
- `replacement value`: The new value to give the cell(s), or a closure to create the value.

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| record      | record      |
| table       | table       |

## Examples

Update a column value

```bash
> {'name': 'nu', 'stars': 5} | update name 'Nushell'
```

Use a closure to alter each value in the 'authors' column to a single string

```bash
> [[project, authors]; ['nu', ['Andrés', 'JT', 'Yehuda']]] | update authors {|row| $row.authors | str join ',' }
```

You can also use a simple command to update 'authors' to a single string

```bash
> [[project, authors]; ['nu', ['Andrés', 'JT', 'Yehuda']]] | update authors { str join ',' }
```

Update a value at an index in a list

```bash
> [1 2 3] | update 1 4
```

Use a closure to compute a new value at an index

```bash
> [1 2 3] | update 1 {|i| $i + 2 }
```

## Subcommands:

| name                                             | type    | usage                   |
| ------------------------------------------------ | ------- | ----------------------- |
| [`update cells`](/commands/docs/update_cells.md) | Builtin | Update the table cells. |
