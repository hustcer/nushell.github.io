# split

**version**: 0.90.2

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

| name                                             | type    | usage                                                   |
| ------------------------------------------------ | ------- | ------------------------------------------------------- |
| [`split chars`](/commands/docs/split_chars.md)   | Builtin | Split a string into a list of characters.               |
| [`split column`](/commands/docs/split_column.md) | Builtin | Split a string into multiple columns using a separator. |
| [`split list`](/commands/docs/split_list.md)     | Builtin | Split a list into multiple lists using a separator.     |
| [`split row`](/commands/docs/split_row.md)       | Builtin | Split a string into multiple rows using a separator.    |
| [`split words`](/commands/docs/split_words.md)   | Builtin | Split a string's words into separate rows.              |
