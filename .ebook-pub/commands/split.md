# split

**version**: 0.100.1

## **usage**:

Split contents across desired subcommand (like row, column) via the separator.

## Signature

`> split `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Notes

```text
You must use one of the following subcommands. Using this command as-is will only produce this help message.
```

## Subcommands:

| name                                                   | type     | usage                                                   |
| ------------------------------------------------------ | -------- | ------------------------------------------------------- |
| [`split cell-path`](/commands/docs/split_cell-path.md) | built-in | Split a cell-path into its components.                  |
| [`split chars`](/commands/docs/split_chars.md)         | built-in | Split a string into a list of characters.               |
| [`split column`](/commands/docs/split_column.md)       | built-in | Split a string into multiple columns using a separator. |
| [`split list`](/commands/docs/split_list.md)           | built-in | Split a list into multiple lists using a separator.     |
| [`split row`](/commands/docs/split_row.md)             | built-in | Split a string into multiple rows using a separator.    |
| [`split words`](/commands/docs/split_words.md)         | built-in | Split a string's words into separate rows.              |
