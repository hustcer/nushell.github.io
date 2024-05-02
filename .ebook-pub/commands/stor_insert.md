# stor insert

**version**: 0.93.0

## **usage**:

Insert information into a specified table in the in-memory sqlite database.

## Signature

`> stor insert --table-name --data-record`

## Parameters

- `--table-name {string}`: name of the table you want to insert into
- `--data-record {record}`: a record of column names and column values to insert into the specified table

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

Insert data the in-memory sqlite database using a data-record of column-name and column-value pairs

```bash
> stor insert --table-name nudb --data-record {bool1: true, int1: 5, float1: 1.1, str1: fdncred, datetime1: 2023-04-17}
```
