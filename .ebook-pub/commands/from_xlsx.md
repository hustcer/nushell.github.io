# from xlsx

**version**: 0.93.0

## **usage**:

Parse binary Excel(.xlsx) data and create table.

## Signature

`> from xlsx --sheets`

## Parameters

- `--sheets {list<string>}`: Only convert specified sheets

## Input/output types:

| input  | output |
| ------ | ------ |
| binary | table  |

## Examples

Convert binary .xlsx data to a table

```bash
> open --raw test.xlsx | from xlsx
```

Convert binary .xlsx data to a table, specifying the tables

```bash
> open --raw test.xlsx | from xlsx --sheets [Spreadsheet1]
```
