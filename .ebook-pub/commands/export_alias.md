# export alias

**version**: 0.80.0

## **usage**:

Alias a command (with optional flags) to a new name and export it from a module.

## Signature

`> export alias (name) (initial_value)`

## Parameters

- `name`: name of the alias
- `initial_value`: equals sign followed by value

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```

## Examples

Alias ll to ls -l and export it from a module

```bash
> module spam { export alias ll = ls -l }
```
