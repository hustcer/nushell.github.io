# polars drop-duplicates

**version**: 0.100.1

## **usage**:

Drops duplicate values in dataframe.

## Signature

`> polars drop-duplicates (subset) --maintain --last`

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
> [[a b]; [1 2] [3 4] [1 2]] | polars into-df
                | polars drop-duplicates
                | polars sort-by a
```
