# dfr quantile

**version**: 0.90.2

## **usage**:

Aggregates the columns to the selected quantile.

## Signature

`> dfr quantile (quantile)`

## Parameters

- `quantile`: quantile value for quantile operation

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

quantile value from columns in a dataframe

```bash
> [[a b]; [6 2] [1 4] [4 1]] | dfr into-df | dfr quantile 0.5
```
