# insert

**version**: 0.85.0

## **usage**:

Insert a new column, using an expression or closure to create each row's values.

## Signature

`> insert (field) (new value)`

## Parameters

- `field`: the name of the column to insert
- `new value`: the new value to give the cell(s)

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

Insert a column with values equal to their row index, plus the value of 'foo' in each row

```bash
> [[foo]; [7] [8] [9]] | enumerate | insert bar {|e| $e.item.foo + $e.index } | flatten
```
