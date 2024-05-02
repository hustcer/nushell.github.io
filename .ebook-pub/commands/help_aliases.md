# help aliases

**version**: 0.93.0

## **usage**:

Show help on nushell aliases.

## Signature

`> help aliases ...rest --find`

## Parameters

- `...rest`: The name of alias to get help on.
- `--find {string}`: string to find in alias names and usage

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

show all aliases

```bash
> help aliases
```

show help for single alias

```bash
> help aliases my-alias
```

search for string in alias names and usages

```bash
> help aliases --find my-alias
```
