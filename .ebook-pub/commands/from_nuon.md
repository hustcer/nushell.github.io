# from nuon

**version**: 0.85.0

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
