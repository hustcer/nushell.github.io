# query

**version**: 0.93.0

## **usage**:

Show all the query commands

## Signature

`> query `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Subcommands:

| name                                         | type           | usage                                                |
| -------------------------------------------- | -------------- | ---------------------------------------------------- | -------------------------- |
| [`query db`](/commands/docs/query_db.md)     | Builtin        | Query a database using SQL.                          |
| [`query json`](/commands/docs/query_json.md) | Builtin,Plugin | execute json query on json file (open --raw \<file\> | query json 'query string') |
| [`query web`](/commands/docs/query_web.md)   | Builtin,Plugin | execute selector query on html/web                   |
| [`query xml`](/commands/docs/query_xml.md)   | Builtin,Plugin | execute xpath query on xml                           |
