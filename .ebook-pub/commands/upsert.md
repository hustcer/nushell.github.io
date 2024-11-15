# upsert

**version**: 0.100.1

## **usage**:

Update an existing column to have a new value, or insert a new column.

## Signature

`> upsert (field) (replacement value)`

## Parameters

- `field`: The name of the column to update or insert.
- `replacement value`: The new value to give the cell(s), or a closure to create the value.

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| record      | record      |
| table       | table       |

## Examples

Update a record's value

```bash
> {'name': 'nu', 'stars': 5} | upsert name 'Nushell'
```

Insert a new entry into a record

```bash
> {'name': 'nu', 'stars': 5} | upsert language 'Rust'
```

Update each row of a table

```bash
> [[name lang]; [Nushell ''] [Reedline '']] | upsert lang 'Rust'
```

Insert a new column with values computed based off the other columns

```bash
> [[foo]; [7] [8] [9]] | upsert bar {|row| $row.foo * 2 }
```

Update null values in a column to a default value

```bash
> [[foo]; [2] [null] [4]] | upsert foo { default 0 }
```

Upsert into a list, updating an existing value at an index

```bash
> [1 2 3] | upsert 0 2
```

Upsert into a list, inserting a new value at the end

```bash
> [1 2 3] | upsert 3 4
```

## Notes

```text
When updating or inserting a column, the closure will be run for each row, and the current row will be passed as the first argument. Referencing `$in` inside the closure will provide the value at the column for the current row or null if the column does not exist.

When updating a specific index, the closure will instead be run once. The first argument to the closure and the `$in` value will both be the current value at the index. If the command is inserting at the end of a list or table, then both of these values will be null.
```
