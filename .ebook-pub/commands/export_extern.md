# export extern

**version**: 0.93.0

## **usage**:

Define an extern and export it from a module.

## Signature

`> export extern (def_name) (params)`

## Parameters

- `def_name`: Definition name.
- `params`: Parameters.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Export the signature for an external command

```bash
> export extern echo [text: string]
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
