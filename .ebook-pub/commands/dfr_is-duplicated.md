# dfr is-duplicated

**version**: 0.93.0

## **usage**:

Creates mask indicating duplicated values.

## Signature

`> dfr is-duplicated `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create mask indicating duplicated values

```bash
> [5 6 6 6 8 8 8] | dfr into-df | dfr is-duplicated
```

Create mask indicating duplicated rows in a dataframe

```bash
> [[a, b]; [1 2] [1 2] [3 3] [3 3] [1 1]] | dfr into-df | dfr is-duplicated
```
