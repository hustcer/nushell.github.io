# dfr collect

**version**: 0.80.0

## **usage**:

Collect lazy dataframe into eager dataframe.

## Signature

`> dfr collect `

## Examples

drop duplicates

```bash
> [[a b]; [1 2] [3 4]] | dfr into-lazy | dfr collect
```
