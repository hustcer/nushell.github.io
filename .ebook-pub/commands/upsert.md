# upsert

**version**: 0.90.2

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

Upsert into a list, updating an existing value at an index

```bash
> [1 2 3] | upsert 0 2
```

Upsert into a list, inserting a new value at the end

```bash
> [1 2 3] | upsert 3 4
```
