# while

**version**: 0.90.2

## **usage**:

Conditionally run a block in a loop.

## Signature

`> while (cond) (block)`

## Parameters

- `cond`: Condition to check.
- `block`: Block to loop if check succeeds.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Loop while a condition is true

```bash
> mut x = 0; while $x < 10 { $x = $x + 1 }
```
