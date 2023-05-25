# dfr is-unique

**version**: 0.80.0

## **usage**:

Creates mask indicating unique values.

## Signature

`> dfr is-unique `

## Examples

Create mask indicating unique values

```bash
> [5 6 6 6 8 8 8] | dfr into-df | dfr is-unique
```

Create mask indicating duplicated rows in a dataframe

```bash
> [[a, b]; [1 2] [1 2] [3 3] [3 3] [1 1]] | dfr into-df | dfr is-unique
```
