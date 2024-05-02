# query db

**version**: 0.93.0

## **usage**:

Query a database using SQL.

## Signature

`> query db (SQL) --params`

## Parameters

- `SQL`: SQL to execute against the database.
- `--params {any}`: List of parameters for the SQL statement

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Execute SQL against a SQLite database

```bash
> open foo.db | query db "SELECT * FROM Bar"
```

Execute a SQL statement with parameters

```bash
> stor create -t my_table -c { first: str, second: int }
stor open | query db "INSERT INTO my_table VALUES (?, ?)" -p [hello 123]
```

Execute a SQL statement with named parameters

```bash
> stor create -t my_table -c { first: str, second: int }
stor insert -t my_table -d { first: 'hello', second: '123' }
stor open | query db "SELECT * FROM my_table WHERE second = :search_second" -p { search_second: 123 }
```
