# hide

**version**: 0.100.1

## **usage**:

Hide definitions in the current scope.

## Signature

`> hide (module) (members)`

## Parameters

- `module`: Module or module file.
- `members`: Which members of the module to import.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Hide the alias just defined

```bash
> alias lll = ls -l; hide lll
```

Hide a custom command

```bash
> def say-hi [] { echo 'Hi!' }; hide say-hi
```

## Notes

```text
Definitions are hidden by priority: First aliases, then custom commands.

This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
