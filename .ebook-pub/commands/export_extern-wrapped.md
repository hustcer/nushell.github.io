# export extern-wrapped

**version**: 0.85.0

## **usage**:

Define an extern with a custom code block and export it from a module.

## Signature

`> export extern-wrapped (def_name) (params) (body)`

## Parameters

- `def_name`: definition name
- `params`: parameters
- `body`: wrapper code block

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Export the signature for an external command

```bash
> export extern-wrapped my-echo [...rest] { echo $rest }
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
