# if

**version**: 0.85.0

## **usage**:

Conditionally run a block.

## Signature

`> if (cond) (then_block) (else_expression)`

## Parameters

- `cond`: condition to check
- `then_block`: block to run if check succeeds
- `else_expression`: expression or block to run if check fails

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
