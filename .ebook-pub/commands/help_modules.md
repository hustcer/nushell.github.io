# help modules

**version**: 0.90.2

## **usage**:

Show help on nushell modules.

## Signature

`> help modules ...rest --find`

## Parameters

- `...rest`: The name of module to get help on.
- `--find {string}`: string to find in module names and usage

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

show all modules

```bash
> help modules
```

show help for single module

```bash
> help modules my-module
```

search for string in module names and usages

```bash
> help modules --find my-module
```

## Notes

```text
When requesting help for a single module, its commands and aliases will be highlighted if they
are also available in the current scope. Commands/aliases that were imported under a different name
(such as with a prefix after `use some-module`) will be highlighted in parentheses.
```
