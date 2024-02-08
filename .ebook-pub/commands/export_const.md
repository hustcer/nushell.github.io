# export const

**version**: 0.90.2

## **usage**:

Use parse-time constant from a module and export them from this module.

## Signature

`> export const (const_name) (initial_value)`

## Parameters

- `const_name`: Constant name.
- `initial_value`: Equals sign followed by constant value.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Re-export a command from another module

```bash
> module spam { export const foo = 3; }
    module eggs { export use spam foo }
    use eggs foo
    foo

```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
