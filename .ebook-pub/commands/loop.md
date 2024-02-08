# loop

**version**: 0.90.2

## **usage**:

Run a block in a loop.

## Signature

`> loop (block)`

## Parameters

- `block`: Block to loop.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Loop while a condition is true

```bash
> mut x = 0; loop { if $x > 10 { break }; $x = $x + 1 }; $x
```
