# dfr collect

**version**: 0.90.2

## **usage**:

Collect lazy dataframe into eager dataframe.

## Signature

`> dfr collect `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

drop duplicates

```bash
> [[a b]; [1 2] [3 4]] | dfr into-lazy | dfr collect
```
