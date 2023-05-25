# while

**version**: 0.80.0

## **usage**:

Conditionally run a block in a loop.

## Signature

`> while (cond) (block)`

## Parameters

- `cond`: condition to check
- `block`: block to loop if check succeeds

## Examples

Loop while a condition is true

```bash
> mut x = 0; while $x < 10 { $x = $x + 1 }
```
