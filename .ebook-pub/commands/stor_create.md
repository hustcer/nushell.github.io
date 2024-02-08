# stor create

**version**: 0.90.2

## **usage**:

Create a table in the in-memory sqlite database.

## Signature

`> stor create --table-name --columns`

## Parameters

- `--table-name {string}`: name of the table you want to create
- `--columns {record}`: a record of column names and datatypes

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

Create an in-memory sqlite database with specified table name, column names, and column data types

```bash
> stor create --table-name nudb --columns {bool1: bool, int1: int, float1: float, str1: str, datetime1: datetime}
```
