# from xlsx

**version**: 0.80.0

## **usage**:

Parse binary Excel(.xlsx) data and create table.

## Signature

`> from xlsx --sheets`

## Parameters

- `--sheets {list<string>}`: Only convert specified sheets

## Examples

Convert binary .xlsx data to a table

```bash
> open --raw test.xlsx | from xlsx
```

Convert binary .xlsx data to a table, specifying the tables

```bash
> open --raw test.xlsx | from xlsx -s [Spreadsheet1]
```
