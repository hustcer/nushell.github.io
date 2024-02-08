# mut

**version**: 0.90.2

## **usage**:

Create a mutable variable and give it a value.

## Signature

`> mut (var_name) (initial_value)`

## Parameters

- `var_name`: Variable name.
- `initial_value`: Equals sign followed by value.

## Input/output types:

| input | output  |
| ----- | ------- |
| any   | nothing |

## Examples

Set a mutable variable to a value, then update it

```bash
> mut x = 10; $x = 12
```

Upsert a value inside a mutable data structure

```bash
> mut a = {b:{c:1}}; $a.b.c = 2
```

Set a mutable variable to the result of an expression

```bash
> mut x = 10 + 100
```

Set a mutable variable based on the condition

```bash
> mut x = if false { -1 } else { 1 }
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
