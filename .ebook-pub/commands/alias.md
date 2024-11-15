# alias

**version**: 0.100.1

## **usage**:

Alias a command (with optional flags) to a new name.

## Signature

`> alias (name) (initial_value)`

## Parameters

- `name`: Name of the alias.
- `initial_value`: Equals sign followed by value.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Alias ll to ls -l

```bash
> alias ll = ls -l
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
