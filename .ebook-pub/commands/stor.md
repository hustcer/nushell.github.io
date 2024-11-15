# stor

**version**: 0.93.0

## **usage**:

Various commands for working with the in-memory sqlite database.

## Signature

`> stor `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Notes

```text
You must use one of the following subcommands. Using this command as-is will only produce this help message.
```

## Subcommands:

| name                                           | type    | usage                                                                       |
| ---------------------------------------------- | ------- | --------------------------------------------------------------------------- |
| [`stor create`](/commands/docs/stor_create.md) | Builtin | Create a table in the in-memory sqlite database.                            |
| [`stor delete`](/commands/docs/stor_delete.md) | Builtin | Delete a table or specified rows in the in-memory sqlite database.          |
| [`stor export`](/commands/docs/stor_export.md) | Builtin | Export the in-memory sqlite database to a sqlite database file.             |
| [`stor import`](/commands/docs/stor_import.md) | Builtin | Import a sqlite database file into the in-memory sqlite database.           |
| [`stor insert`](/commands/docs/stor_insert.md) | Builtin | Insert information into a specified table in the in-memory sqlite database. |
| [`stor open`](/commands/docs/stor_open.md)     | Builtin | Opens the in-memory sqlite database.                                        |
| [`stor reset`](/commands/docs/stor_reset.md)   | Builtin | Reset the in-memory database by dropping all tables.                        |
| [`stor update`](/commands/docs/stor_update.md) | Builtin | Update information in a specified table in the in-memory sqlite database.   |
