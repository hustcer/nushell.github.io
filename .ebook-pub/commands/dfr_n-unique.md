# dfr n-unique

**version**: 0.93.0

## **usage**:

Counts unique values.

## Signature

`> dfr n-unique `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Counts unique values

```bash
> [1 1 2 2 3 3 4] | dfr into-df | dfr n-unique
```

Creates a is n-unique expression from a column

```bash
> dfr col a | dfr n-unique
```
