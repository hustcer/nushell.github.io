# export extern

**version**: 0.80.0

## **usage**:

Define an extern and export it from a module.

## Signature

`> export extern (def_name) (params)`

## Parameters

- `def_name`: definition name
- `params`: parameters

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```

## Examples

Export the signature for an external command

```bash
> export extern echo [text: string]
```
