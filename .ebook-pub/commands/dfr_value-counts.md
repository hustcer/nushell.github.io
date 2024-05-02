# dfr value-counts

**version**: 0.93.0

## **usage**:

Returns a dataframe with the counts for unique values in series.

## Signature

`> dfr value-counts `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Calculates value counts

```bash
> [5 5 5 5 6 6] | dfr into-df | dfr value-counts
```
