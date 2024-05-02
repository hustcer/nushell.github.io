# from vcf

**version**: 0.93.0

## **usage**:

Parse text as .vcf and create table.

## Signature

`> from vcf `

## Input/output types:

| input  | output |
| ------ | ------ |
| string | table  |

## Examples

Converts ics formatted string to table

```bash
> 'BEGIN:VCARD
N:Foo
FN:Bar
EMAIL:foo@bar.com
END:VCARD' | from vcf
```
