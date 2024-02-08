# insert

**version**: 0.90.2

## **usage**:

Insert a new column, using an expression or closure to create each row's values.

## Signature

`> insert (field) (new value)`

## Parameters

- `field`: The name of the column to insert.
- `new value`: The new value to give the cell(s).

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| record      | record      |
| table       | table       |

## Examples

Insert a new entry into a single record

```bash
> {'name': 'nu', 'stars': 5} | insert alias 'Nushell'
```

Insert a new column into a table, populating all rows

```bash
> [[project, lang]; ['Nushell', 'Rust']] | insert type 'shell'
```

Insert a new column with values computed based off the other columns

```bash
> [[foo]; [7] [8] [9]] | insert bar {|row| $row.foo * 2 }
```

Insert a new value into a list at an index

```bash
> [1 2 4] | insert 2 3
```

Insert a new value at the end of a list

```bash
> [1 2 3] | insert 3 4
```
