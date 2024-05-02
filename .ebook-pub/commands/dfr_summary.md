# dfr summary

**version**: 0.93.0

## **usage**:

For a dataframe, produces descriptive statistics (summary statistics) for its numeric columns.

## Signature

`> dfr summary --quantiles`

## Parameters

- `--quantiles {table}`: provide optional quantiles

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

list dataframe descriptives

```bash
> [[a b]; [1 1] [1 1]] | dfr into-df | dfr summary
```
