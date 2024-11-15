# polars n-unique

**version**: 0.100.1

## **usage**:

Counts unique values.

## Signature

`> polars n-unique `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Counts unique values

```bash
> [1 1 2 2 3 3 4] | polars into-df | polars n-unique
```

Creates a is n-unique expression from a column

```bash
> polars col a | polars n-unique
```
