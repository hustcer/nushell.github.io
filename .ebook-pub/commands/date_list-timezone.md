# date list-timezone

**version**: 0.100.1

## **usage**:

List supported time zones.

## Signature

`> date list-timezone `

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

Show time zone(s) that contains 'Shanghai'

```bash
> date list-timezone | where timezone =~ Shanghai
```
