# export def

**version**: 0.85.0

## **usage**:

Define a custom command and export it from a module.

## Signature

`> export def (name) (params) (block)`

## Parameters

- `name`: definition name
- `params`: parameters
- `block`: body of the definition

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Define a custom command in a module and call it

```bash
> module spam { export def foo [] { "foo" } }; use spam foo; foo
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
