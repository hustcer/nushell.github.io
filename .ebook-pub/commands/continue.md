# continue

**version**: 0.90.2

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
