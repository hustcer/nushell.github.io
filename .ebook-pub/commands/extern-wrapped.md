# extern-wrapped

**version**: 0.85.0

## **usage**:

Define a signature for an external command with a custom code block.

## Signature

`> extern-wrapped (def_name) (params) (body)`

## Parameters

- `def_name`: definition name
- `params`: parameters
- `body`: wrapper code block

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Define a custom wrapper for an external command

```bash
> extern-wrapped my-echo [...rest] { echo $rest }; my-echo spam
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
