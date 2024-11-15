# polars summary

**version**: 0.100.1

## **usage**:

For a dataframe, produces descriptive statistics (summary statistics) for its numeric columns.

## Signature

`> polars summary --quantiles`

## Parameters

- `--quantiles {list<float>}`: provide optional quantiles

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

list dataframe descriptives

```bash
> [[a b]; [1 1] [1 1]] | polars into-df | polars summary
```
