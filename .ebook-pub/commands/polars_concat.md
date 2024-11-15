# polars concat

**version**: 0.100.1

## **usage**:

Concatenate two or more dataframes.

## Signature

`> polars concat ...rest --no-parallel --rechunk --to-supertypes --diagonal --from-partitioned-ds`

## Parameters

- `...rest`: The dataframes to concatenate
- `--no-parallel`: Disable parallel execution
- `--rechunk`: Rechunk the resulting dataframe
- `--to-supertypes`: Cast to supertypes
- `--diagonal`: Concatenate dataframes diagonally
- `--from-partitioned-ds`: Concatenate dataframes from a partitioned dataset

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Concatenates two dataframes with the dataframe in the pipeline.

```bash
> [[a b]; [1 2]] | polars into-df
                    | polars concat ([[a b]; [3 4]] | polars into-df) ([[a b]; [5 6]] | polars into-df)
                    | polars collect
                    | polars sort-by [a b]
```

Concatenates three dataframes together

```bash
> polars concat ([[a b]; [1 2]] | polars into-df) ([[a b]; [3 4]] | polars into-df) ([[a b]; [5 6]] | polars into-df)
                    | polars collect
                    | polars sort-by [a b]
```
