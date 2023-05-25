# extern

**version**: 0.80.0

## **usage**:

Define a signature for an external command.

## Signature

`> extern (def_name) (params) (body)`

## Parameters

- `def_name`: definition name
- `params`: parameters
- `body`: wrapper function block

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```

## Examples

Write a signature for an external command

```bash
> extern echo [text: string]
```
