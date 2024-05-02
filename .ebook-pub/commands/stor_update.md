# stor update

**version**: 0.93.0

## **usage**:

Update information in a specified table in the in-memory sqlite database.

## Signature

`> stor update --table-name --update-record --where-clause`

## Parameters

- `--table-name {string}`: name of the table you want to insert into
- `--update-record {record}`: a record of column names and column values to update in the specified table
- `--where-clause {string}`: a sql string to use as a where clause without the WHERE keyword

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

Update the in-memory sqlite database

```bash
> stor update --table-name nudb --update-record {str1: nushell datetime1: 2020-04-17}
```

Update the in-memory sqlite database with a where clause

```bash
> stor update --table-name nudb --update-record {str1: nushell datetime1: 2020-04-17} --where-clause "bool1 = 1"
```
