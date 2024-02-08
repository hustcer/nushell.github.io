# from url

**version**: 0.90.2

## **usage**:

Parse url-encoded string as a record.

## Signature

`> from url `

## Input/output types:

| input  | output |
| ------ | ------ |
| string | record |

## Examples

Convert url encoded string into a record

```bash
> 'bread=baguette&cheese=comt%C3%A9&meat=ham&fat=butter' | from url
```
