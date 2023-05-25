# from ods

**version**: 0.80.0

## **usage**:

Parse OpenDocument Spreadsheet(.ods) data and create table.

## Signature

`> from ods --sheets`

## Parameters

- `--sheets {list<string>}`: Only convert specified sheets

## Examples

Convert binary .ods data to a table

```bash
> open --raw test.ods | from ods
```

Convert binary .ods data to a table, specifying the tables

```bash
> open --raw test.ods | from ods -s [Spreadsheet1]
```
