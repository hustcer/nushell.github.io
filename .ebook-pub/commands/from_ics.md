# from ics

**version**: 0.90.2

## **usage**:

Parse text as .ics and create table.

## Signature

`> from ics `

## Input/output types:

| input  | output |
| ------ | ------ |
| string | table  |

## Examples

Converts ics formatted string to table

```bash
> 'BEGIN:VCALENDAR
            END:VCALENDAR' | from ics
```
