# loop

**version**: 0.100.1

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

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html
```
