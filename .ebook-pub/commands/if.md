# if

**version**: 0.100.1

## **usage**:

Conditionally run a block.

## Signature

`> if (cond) (then_block) (else_expression)`

## Parameters

- `cond`: Condition to check.
- `then_block`: Block to run if check succeeds.
- `else_expression`: Expression or block to run when the condition is false.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Output a value if a condition matches, otherwise return nothing

```bash
> if 2 < 3 { 'yes!' }
```

Output a value if a condition matches, else return another value

```bash
> if 5 < 3 { 'yes!' } else { 'no!' }
```

Chain multiple if's together

```bash
> if 5 < 3 { 'yes!' } else if 4 < 5 { 'no!' } else { 'okay!' }
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
