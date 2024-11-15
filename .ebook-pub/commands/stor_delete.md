# stor delete

**version**: 0.100.1

## **usage**:

Delete a table or specified rows in the in-memory sqlite database.

## Signature

`> stor delete --table-name --where-clause`

## Parameters

- `--table-name {string}`: name of the table you want to insert into
- `--where-clause {string}`: a sql string to use as a where clause without the WHERE keyword

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

Delete a table from the in-memory sqlite database

```bash
> stor delete --table-name nudb
```

Delete some rows from the in-memory sqlite database with a where clause

```bash
> stor delete --table-name nudb --where-clause "int1 == 5"
```
