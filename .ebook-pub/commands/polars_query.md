# polars query

**version**: 0.100.1

## **usage**:

Query dataframe using SQL. Note: The dataframe is always named 'df' in your query's from clause.

## Signature

`> polars query (sql)`

## Parameters

- `sql`: sql query

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Query dataframe using SQL

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars query 'select a from df'
```
