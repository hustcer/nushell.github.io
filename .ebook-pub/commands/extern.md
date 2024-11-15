# extern

**version**: 0.100.1

## **usage**:

Define a signature for an external command.

## Signature

`> extern (def_name) (params)`

## Parameters

- `def_name`: Definition name.
- `params`: Parameters.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Write a signature for an external command

```bash
> extern echo [text: string]
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
