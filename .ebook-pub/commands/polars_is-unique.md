# polars is-unique

**version**: 0.100.1

## **usage**:

Creates mask indicating unique values.

## Signature

`> polars is-unique `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create mask indicating unique values

```bash
> [5 6 6 6 8 8 8] | polars into-df | polars is-unique
```

Create mask indicating duplicated rows in a dataframe

```bash
> [[a, b]; [1 2] [1 2] [3 3] [3 3] [1 1]] | polars into-df | polars is-unique
```
