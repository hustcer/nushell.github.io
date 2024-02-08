# length

**version**: 0.90.2

## **usage**:

Count the number of items in an input list or rows in a table.

## Signature

`> length `

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | int    |

## Examples

Count the number of items in a list

```bash
> [1 2 3 4 5] | length
```

Count the number of rows in a table

```bash
> [{a:1 b:2}, {a:2 b:3}] | length
```
