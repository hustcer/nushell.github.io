# input

**version**: 0.90.2

## **usage**:

Get input from the user.

## Signature

`> input (prompt) --bytes-until-any --numchar --suppress-output`

## Parameters

- `prompt`: Prompt to show the user.
- `--bytes-until-any {string}`: read bytes (not text) until any of the given stop bytes is seen
- `--numchar {int}`: number of characters to read; suppresses output
- `--suppress-output`: don't print keystroke values

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

Get input from the user, and assign to a variable

```bash
> let user_input = (input)
```

Get two characters from the user, and assign to a variable

```bash
> let user_input = (input --numchar 2)
```

## Subcommands:

| name                                             | type    | usage                            |
| ------------------------------------------------ | ------- | -------------------------------- |
| [`input list`](/commands/docs/input_list.md)     | Builtin | Interactive list selection.      |
| [`input listen`](/commands/docs/input_listen.md) | Builtin | Listen for user interface event. |
