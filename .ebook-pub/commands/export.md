# export

**version**: 0.100.1

## **usage**:

Export definitions or environment variables from a module.

## Signature

`> export `

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Export a definition from a module

```bash
> module utils { export def my-command [] { "hello" } }; use utils my-command; my-command
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```

## Subcommands:

| name                                               | type    | usage                                                                            |
| -------------------------------------------------- | ------- | -------------------------------------------------------------------------------- |
| [`export alias`](/commands/docs/export_alias.md)   | keyword | Alias a command (with optional flags) to a new name and export it from a module. |
| [`export const`](/commands/docs/export_const.md)   | keyword | Use parse-time constant from a module and export them from this module.          |
| [`export def`](/commands/docs/export_def.md)       | keyword | Define a custom command and export it from a module.                             |
| [`export extern`](/commands/docs/export_extern.md) | keyword | Define an extern and export it from a module.                                    |
| [`export module`](/commands/docs/export_module.md) | keyword | Export a custom module from a module.                                            |
| [`export use`](/commands/docs/export_use.md)       | keyword | Use definitions from a module and export them from this module.                  |
