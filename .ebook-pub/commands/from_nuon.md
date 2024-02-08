# from nuon

**version**: 0.90.2

## **usage**:

Convert from nuon to structured data.

## Signature

`> from nuon `

## Input/output types:

| input  | output |
| ------ | ------ |
| string | any    |

## Examples

Converts nuon formatted string to table

```bash
> '{ a:1 }' | from nuon
```

Converts nuon formatted string to table

```bash
> '{ a:1, b: [1, 2] }' | from nuon
```
