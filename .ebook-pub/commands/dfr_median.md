# dfr median

**version**: 0.90.2

## **usage**:

Aggregates columns to their median value

## Signature

`> dfr median `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Median value from columns in a dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | dfr into-df | dfr median
```
