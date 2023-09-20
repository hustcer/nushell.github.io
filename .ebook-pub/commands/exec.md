# exec

**version**: 0.85.0

## **usage**:

Execute a command, replacing the current process.

## Signature

`> exec (command)`

## Parameters

- `command`: the command to execute

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
Currently supported only on Unix-based systems.
```
