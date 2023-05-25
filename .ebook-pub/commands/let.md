# let

**version**: 0.80.0

## **usage**:

Create a variable and give it a value.

## Signature

`> let (var_name) (initial_value)`

## Parameters

- `var_name`: variable name
- `initial_value`: equals sign followed by value

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```

## Examples

Set a variable to a value

```bash
> let x = 10
```

Set a variable to the result of an expression

```bash
> let x = 10 + 100
```

Set a variable based on the condition

```bash
> let x = if false { -1 } else { 1 }
```
