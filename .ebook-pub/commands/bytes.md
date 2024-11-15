# bytes

**version**: 0.100.1

## **usage**:

Various commands for working with byte data.

## Signature

`> bytes `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Notes

```text
You must use one of the following subcommands. Using this command as-is will only produce this help message.
```

## Subcommands:

| name                                                       | type     | usage                                                                                      |
| ---------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| [`bytes add`](/commands/docs/bytes_add.md)                 | built-in | Add specified bytes to the input.                                                          |
| [`bytes at`](/commands/docs/bytes_at.md)                   | built-in | Get bytes defined by a range.                                                              |
| [`bytes build`](/commands/docs/bytes_build.md)             | built-in | Create bytes from the arguments.                                                           |
| [`bytes collect`](/commands/docs/bytes_collect.md)         | built-in | Concatenate multiple binary into a single binary, with an optional separator between each. |
| [`bytes ends-with`](/commands/docs/bytes_ends-with.md)     | built-in | Check if bytes ends with a pattern.                                                        |
| [`bytes index-of`](/commands/docs/bytes_index-of.md)       | built-in | Returns start index of first occurrence of pattern in bytes, or -1 if no match.            |
| [`bytes length`](/commands/docs/bytes_length.md)           | built-in | Output the length of any bytes in the pipeline.                                            |
| [`bytes remove`](/commands/docs/bytes_remove.md)           | built-in | Remove bytes.                                                                              |
| [`bytes replace`](/commands/docs/bytes_replace.md)         | built-in | Find and replace binary.                                                                   |
| [`bytes reverse`](/commands/docs/bytes_reverse.md)         | built-in | Reverse the bytes in the pipeline.                                                         |
| [`bytes starts-with`](/commands/docs/bytes_starts-with.md) | built-in | Check if bytes starts with a pattern.                                                      |
