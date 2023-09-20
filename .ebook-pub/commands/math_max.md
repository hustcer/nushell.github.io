# math max

**version**: 0.85.0

## **usage**:

Returns the maximum of a list of values, or of columns in a table.

## Signature

`> math max `

## Input/output types:

| input       | output |
| ----------- | ------ |
| list\<any\> | any    |
| table       | record |

## Examples

Find the maximum of list of numbers

```bash
> [-50 100 25] | math max
```

Find the maxima of the columns of a table

```bash
> [{a: 1 b: 3} {a: 2 b: -1}] | math max
```
