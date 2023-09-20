# keybindings list

**version**: 0.85.0

## **usage**:

List available options that can be used to create keybindings.

## Signature

`> keybindings list --modifiers --keycodes --modes --events --edits`

## Parameters

- `--modifiers`: list of modifiers
- `--keycodes`: list of keycodes
- `--modes`: list of edit modes
- `--events`: list of reedline event
- `--edits`: list of edit commands

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

Get list of key modifiers

```bash
> keybindings list -m
```

Get list of reedline events and edit commands

```bash
> keybindings list -e -d
```

Get list with all the available options

```bash
> keybindings list
```
