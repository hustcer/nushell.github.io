# query db

**version**: 0.80.0

## **usage**:

Query a database using SQL.

## Signature

`> query db (SQL)`

## Parameters

- `SQL`: SQL to execute against the database

## Examples

Execute SQL against a SQLite database

```bash
> open foo.db | query db "SELECT * FROM Bar"
```
