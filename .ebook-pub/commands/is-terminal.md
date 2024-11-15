# is-terminal

**version**: 0.100.1

## **usage**:

Check if stdin, stdout, or stderr is a terminal.

## Signature

`> is-terminal --stdin --stdout --stderr`

## Parameters

- `--stdin`: Check if stdin is a terminal
- `--stdout`: Check if stdout is a terminal
- `--stderr`: Check if stderr is a terminal

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | bool   |

## Examples

Return "terminal attached" if standard input is attached to a terminal, and "no terminal" if not.

```bash
> if (is-terminal --stdin) { "terminal attached" } else { "no terminal" }
```
