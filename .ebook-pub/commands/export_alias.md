# export alias

**version**: 0.90.2

## **usage**:

Alias a command (with optional flags) to a new name and export it from a module.

## Signature

`> export alias (name) (initial_value)`

## Parameters

- `name`: Name of the alias.
- `initial_value`: Equals sign followed by value.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Alias ll to ls -l and export it from a module

```bash
> module spam { export alias ll = ls -l }
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
