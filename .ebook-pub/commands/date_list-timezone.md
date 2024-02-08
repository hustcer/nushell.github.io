# date list-timezone

**version**: 0.90.2

## **usage**:

List supported time zones.

## Signature

`> date list-timezone `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

Show timezone(s) that contains 'Shanghai'

```bash
> date list-timezone | where timezone =~ Shanghai
```
