# length

**version**: 0.100.1

## **usage**:

Count the number of items in an input list, rows in a table, or bytes in binary data.

## Signature

`> length `

## Input/output types:

| input       | output |
| ----------- | ------ |
| binary      | int    |
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

Count the number of bytes in binary data

```bash
> 0x[01 02] | length
```
