# help externs

**version**: 0.85.0

## **usage**:

Show help on nushell externs.

## Signature

`> help externs ...rest --find`

## Parameters

- `...rest`: the name of extern to get help on
- `--find {string}`: string to find in extern names and usage

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

show all externs

```bash
> help externs
```

show help for single extern

```bash
> help externs smth
```

search for string in extern names and usages

```bash
> help externs --find smth
```
