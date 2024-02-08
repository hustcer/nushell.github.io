# const

**version**: 0.90.2

## **usage**:

Create a parse-time constant.

## Signature

`> const (const_name) (initial_value)`

## Parameters

- `const_name`: Constant name.
- `initial_value`: Equals sign followed by constant value.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Create a new parse-time constant.

```bash
> const x = 10
```

Create a composite constant value

```bash
> const x = { a: 10, b: 20 }
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
