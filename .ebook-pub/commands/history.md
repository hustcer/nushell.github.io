# history

**version**: 0.85.0

## **usage**:

Get the command history.

## Signature

`> history --clear --long`

## Parameters

- `--clear`: Clears out the history entries
- `--long`: Show long listing of entries for sqlite history

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

Get current history length

```bash
> history | length
```

Show last 5 commands you have ran

```bash
> history | last 5
```

Search all the commands from history that contains 'cargo'

```bash
> history | where command =~ cargo | get command
```

## Subcommands:

| name                                                   | type    | usage                            |
| ------------------------------------------------------ | ------- | -------------------------------- |
| [`history session`](/commands/docs/history_session.md) | Builtin | Get the command history session. |
