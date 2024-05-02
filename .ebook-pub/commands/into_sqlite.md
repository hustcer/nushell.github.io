# into sqlite

**version**: 0.93.0

## **usage**:

Convert table into a SQLite database.

## Signature

`> into sqlite (file-name) --table-name`

## Parameters

- `file-name`: Specify the filename to save the database to.
- `--table-name {string}`: Specify table name to store the data in

## Input/output types:

| input  | output  |
| ------ | ------- |
| record | nothing |
| table  | nothing |

## Examples

Convert ls entries into a SQLite database with 'main' as the table name

```bash
> ls | into sqlite my_ls.db
```

Convert ls entries into a SQLite database with 'my_table' as the table name

```bash
> ls | into sqlite my_ls.db -t my_table
```

Convert table literal into a SQLite database with 'main' as the table name

```bash
> [[name]; [-----] [someone] [=====] [somename] ['(((((']] | into sqlite filename.db
```

Insert a single record into a SQLite database

```bash
> { foo: bar, baz: quux } | into sqlite filename.db
```
