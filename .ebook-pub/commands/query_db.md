# query db

**version**: 0.85.0

## **usage**:

Query a database using SQL.

## Signature

`> query db (SQL)`

## Parameters

- `SQL`: SQL to execute against the database

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Execute SQL against a SQLite database

```bash
> open foo.db | query db "SELECT * FROM Bar"
```
