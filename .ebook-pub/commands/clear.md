# clear

**version**: 0.100.1

## **usage**:

Clear the terminal.

## Signature

`> clear --keep-scrollback`

## Parameters

- `--keep-scrollback`: Do not clear the scrollback history

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Clear the terminal

```bash
> clear
```

Clear the terminal but not its scrollback history

```bash
> clear --keep-scrollback
```

## Notes

```text
By default clears the current screen and the off-screen scrollback buffer.
```
