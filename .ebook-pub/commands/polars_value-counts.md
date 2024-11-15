# polars value-counts

**version**: 0.100.1

## **usage**:

Returns a dataframe with the counts for unique values in series.

## Signature

`> polars value-counts --column --sort --parallel --normalize`

## Parameters

- `--column {string}`: Provide a custom name for the coutn column
- `--sort`: Whether or not values should be sorted
- `--parallel`: Use multiple threads when processing
- `--normalize {string}`: Normalize the counts

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Calculates value counts

```bash
> [5 5 5 5 6 6] | polars into-df | polars value-counts | polars sort-by count
```
