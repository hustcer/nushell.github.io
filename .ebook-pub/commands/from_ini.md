# from ini

**version**: 0.85.0

## **usage**:

Parse text as .ini and create table.

## Signature

`> from ini `

## Input/output types:

| input  | output |
| ------ | ------ |
| string | record |

## Examples

Converts ini formatted string to record

```bash
> '[foo]
a=1
b=2' | from ini
```
