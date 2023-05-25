# help

**version**: 0.80.0

## **usage**:

Display help information about different parts of Nushell.

## Signature

`> help ...rest --find`

## Parameters

- `...rest`: the name of command, alias or module to get help on
- `--find {string}`: string to find in command names, usage, and search terms

## Notes

```text
`help word` searches for "word" in commands, aliases and modules, in that order.
```

## Examples

show help for single command, alias, or module

```bash
> help match
```

show help for single sub-command, alias, or module

```bash
> help str lpad
```

search for string in command names, usage and search terms

```bash
> help --find char
```
