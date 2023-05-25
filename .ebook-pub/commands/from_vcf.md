# from vcf

**version**: 0.80.0

## **usage**:

Parse text as .vcf and create table.

## Signature

`> from vcf `

## Examples

Converts ics formatted string to table

```bash
> 'BEGIN:VCARD
N:Foo
FN:Bar
EMAIL:foo@bar.com
END:VCARD' | from vcf
```
