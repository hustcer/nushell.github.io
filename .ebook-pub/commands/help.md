# help

**version**: 0.100.1

## **usage**:

Display help information about different parts of Nushell.

## Signature

`> help ...rest --find`

## Parameters

- `...rest`: The name of command, alias or module to get help on.
- `--find {string}`: string to find in command names, descriptions, and search terms

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

show help for single command, alias, or module

```bash
> help match
```

show help for single sub-command, alias, or module

```bash
> help str join
```

search for string in command names, descriptions, and search terms

```bash
> help --find char
```

## Notes

```text
`help word` searches for "word" in commands, aliases and modules, in that order.
```

## Subcommands:

| name                                                 | type     | usage                                |
| ---------------------------------------------------- | -------- | ------------------------------------ |
| [`help aliases`](/commands/docs/help_aliases.md)     | built-in | Show help on nushell aliases.        |
| [`help commands`](/commands/docs/help_commands.md)   | built-in | Show help on nushell commands.       |
| [`help escapes`](/commands/docs/help_escapes.md)     | built-in | Show help on nushell string escapes. |
| [`help externs`](/commands/docs/help_externs.md)     | built-in | Show help on nushell externs.        |
| [`help modules`](/commands/docs/help_modules.md)     | built-in | Show help on nushell modules.        |
| [`help operators`](/commands/docs/help_operators.md) | built-in | Show help on nushell operators.      |
