# break

**version**: 0.100.1

## **usage**:

Break a loop.

## Signature

`> break `

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Break out of a loop

```bash
> loop { break }
```

## Notes

```text
This command is a parser keyword. For details, check:
  https://www.nushell.sh/book/thinking_in_nu.html

  break can only be used in while, loop, and for loops. It can not be used with each or other filter commands
```
