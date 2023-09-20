# upsert

**version**: 0.85.0

## **usage**:

Update an existing column to have a new value, or insert a new column.

## Signature

`> upsert (field) (replacement value)`

## Parameters

- `field`: the name of the column to update or insert
- `replacement value`: the new value to give the cell(s), or a closure to create the value

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

Update each row of a table

```bash
> [[name lang]; [Nushell ''] [Reedline '']] | upsert lang 'Rust'
```

Insert a new entry into a single record

```bash
> {'name': 'nu', 'stars': 5} | upsert language 'Rust'
```

Use in closure form for more involved updating logic

```bash
> [[count fruit]; [1 'apple']] | enumerate | upsert item.count {|e| ($e.item.fruit | str length) + $e.index } | get item
```

Upsert an int into a list, updating an existing value based on the index

```bash
> [1 2 3] | upsert 0 2
```

Upsert an int into a list, inserting a new value based on the index

```bash
> [1 2 3] | upsert 3 4
```
