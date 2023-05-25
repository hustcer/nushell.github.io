# exec

**version**: 0.80.0

## **usage**:

Execute a command, replacing the current process.

## Signature

`> exec (command)`

## Parameters

- `command`: the command to execute

## Notes

```text
Currently supported only on Unix-based systems.
```

## Examples

Execute external 'ps aux' tool

```bash
> exec ps aux
```

Execute 'nautilus'

```bash
> exec nautilus
```
