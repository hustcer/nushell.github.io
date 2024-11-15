# exec

**version**: 0.100.1

## **usage**:

Execute a command, replacing or exiting the current process, depending on platform.

## Signature

`> exec (command)`

## Parameters

- `command`: The command to execute.

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

Execute external 'ps aux' tool

```bash
> exec ps aux
```

Execute 'nautilus'

```bash
> exec nautilus
```

## Notes

```text
On Unix-based systems, the current process is replaced with the command.
On Windows based systems, Nushell will wait for the command to finish and then exit with the command's exit code.
```
