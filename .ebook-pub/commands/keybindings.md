# keybindings

**version**: 0.85.0

## **usage**:

Keybindings related commands.

## Signature

`> keybindings `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Notes

```text
You must use one of the following subcommands. Using this command as-is will only produce this help message.

For more information on input and keybindings, check:
  https://www.nushell.sh/book/line_editor.html
```

## Subcommands:

| name                                                           | type    | usage                                                          |
| -------------------------------------------------------------- | ------- | -------------------------------------------------------------- |
| [`keybindings default`](/commands/docs/keybindings_default.md) | Builtin | List default keybindings.                                      |
| [`keybindings list`](/commands/docs/keybindings_list.md)       | Builtin | List available options that can be used to create keybindings. |
| [`keybindings listen`](/commands/docs/keybindings_listen.md)   | Builtin | Get input from the user.                                       |
