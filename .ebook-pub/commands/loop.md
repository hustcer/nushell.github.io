# loop

**version**: 0.80.0

## **usage**:

Run a block in a loop.

## Signature

`> loop (block)`

## Parameters

- `block`: block to loop

## Examples

Loop while a condition is true

```bash
> mut x = 0; loop { if $x > 10 { break }; $x = $x + 1 }; $x
```
