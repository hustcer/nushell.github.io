# history

**version**: 0.80.0

## **usage**:

Get the command history.

## Signature

`> history --clear --long`

## Parameters

- `--clear`: Clears out the history entries
- `--long`: Show long listing of entries for sqlite history

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
> history | wrap cmd | where cmd =~ cargo
```
