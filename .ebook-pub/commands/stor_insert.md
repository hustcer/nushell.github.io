# stor insert

**version**: 0.100.1

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
| record  | table  |
| table   | table  |

## Examples

Insert data in the in-memory sqlite database using a data-record of column-name and column-value pairs

```bash
> stor insert --table-name nudb --data-record {bool1: true, int1: 5, float1: 1.1, str1: fdncred, datetime1: 2023-04-17}
```

Insert data through pipeline input as a record of column-name and column-value pairs

```bash
> {bool1: true, int1: 5, float1: 1.1, str1: fdncred, datetime1: 2023-04-17} | stor insert --table-name nudb
```

Insert data through pipeline input as a table literal

```bash
> [[bool1 int1 float1]; [true 5 1.1], [false 8 3.14]] | stor insert --table-name nudb
```

Insert ls entries

```bash
> ls | stor insert --table-name files
```
