# view

**version**: 0.100.1

## **usage**:

Various commands for viewing debug information.

## Signature

`> view `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Notes

```text
You must use one of the following subcommands. Using this command as-is will only produce this help message.
```

## Subcommands:

| name                                           | type     | usage                                                      |
| ---------------------------------------------- | -------- | ---------------------------------------------------------- |
| [`view files`](/commands/docs/view_files.md)   | built-in | View the files registered in nushell's EngineState memory. |
| [`view ir`](/commands/docs/view_ir.md)         | built-in | View the compiled IR code for a block of code.             |
| [`view source`](/commands/docs/view_source.md) | built-in | View a block, module, or a definition.                     |
| [`view span`](/commands/docs/view_span.md)     | built-in | View the contents of a span.                               |
