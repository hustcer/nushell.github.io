# math max

**version**: 0.80.0

## **usage**:

Returns the maximum of a list of numbers, or of columns in a table.

## Signature

`> math max `

## Examples

Find the maximum of list of numbers

```bash
> [-50 100 25] | math max
```

Find the maxima of the columns of a table

```bash
> [{a: 1 b: 3} {a: 2 b: -1}] | math max
```
