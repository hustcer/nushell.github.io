# continue

**version**: 0.100.1

## **usage**:

Continue a loop from the next iteration.

## Signature

`> continue `

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Continue a loop from the next iteration

```bash
> for i in 1..10 { if $i == 5 { continue }; print $i }
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html

  continue can only be used in while, loop, and for loops. It can not be used with each or other filter commands
```
