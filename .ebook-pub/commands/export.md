# export

**version**: 0.90.2

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
| [`export alias`](/commands/docs/export_alias.md)   | Builtin | Alias a command (with optional flags) to a new name and export it from a module. |
| [`export const`](/commands/docs/export_const.md)   | Builtin | Use parse-time constant from a module and export them from this module.          |
| [`export def`](/commands/docs/export_def.md)       | Builtin | Define a custom command and export it from a module.                             |
| [`export extern`](/commands/docs/export_extern.md) | Builtin | Define an extern and export it from a module.                                    |
| [`export module`](/commands/docs/export_module.md) | Builtin | Export a custom module from a module.                                            |
| [`export use`](/commands/docs/export_use.md)       | Builtin | Use definitions from a module and export them from this module.                  |
