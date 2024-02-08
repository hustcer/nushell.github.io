# dfr drop-duplicates

**version**: 0.90.2

## **usage**:

Drops duplicate values in dataframe.

## Signature

`> dfr drop-duplicates (subset) --maintain --last`

## Parameters

- `subset`: subset of columns to drop duplicates
- `--maintain`: maintain order
- `--last`: keeps last duplicate value (by default keeps first)

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

drop duplicates

```bash
> [[a b]; [1 2] [3 4] [1 2]] | dfr into-df | dfr drop-duplicates
```
