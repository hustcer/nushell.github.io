# query

**version**: 0.100.1

## **usage**:

Show all the query commands

## Signature

`> query `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Subcommands:

| name                                                         | type     | usage                                                                                                                             |
| ------------------------------------------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| [`query db`](/commands/docs/query_db.md)                     | built-in | Query a database using SQL.                                                                                                       |
| [`query json`](/commands/docs/query_json.md)                 | plugin   | execute json query on json file (open --raw \<file\>                                                                              | query json 'query string') |
| [`query web`](/commands/docs/query_web.md)                   | plugin   | execute selector query on html/web                                                                                                |
| [`query webpage-info`](/commands/docs/query_webpage-info.md) | plugin   | uses the webpage crate to extract info from html: title, description, language, links, RSS feeds, Opengraph, Schema.org, and more |
| [`query xml`](/commands/docs/query_xml.md)                   | plugin   | execute xpath query on xml                                                                                                        |
