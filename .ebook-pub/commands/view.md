# view

**version**: 0.90.2

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

| name                                           | type    | usage                                                      |
| ---------------------------------------------- | ------- | ---------------------------------------------------------- |
| [`view files`](/commands/docs/view_files.md)   | Builtin | View the files registered in nushell's EngineState memory. |
| [`view source`](/commands/docs/view_source.md) | Builtin | View a block, module, or a definition.                     |
| [`view span`](/commands/docs/view_span.md)     | Builtin | View the contents of a span.                               |
