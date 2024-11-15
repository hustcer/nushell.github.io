# polars unpivot

**version**: 0.100.1

## **usage**:

Unpivot a DataFrame from wide to long format.

## Signature

`> polars unpivot --index --on --variable-name --value-name`

## Parameters

- `--index {list<any>}`: column names for unpivoting
- `--on {list<any>}`: column names used as value columns
- `--variable-name {string}`: optional name for variable column
- `--value-name {string}`: optional name for value column

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

unpivot on an eager dataframe

```bash
> [[a b c d]; [x 1 4 a] [y 2 5 b] [z 3 6 c]] | polars into-df | polars unpivot -i [b c] -o [a d]
```

unpivot on a lazy dataframe

```bash
> [[a b c d]; [x 1 4 a] [y 2 5 b] [z 3 6 c]] | polars into-lazy | polars unpivot -i [b c] -o [a d] | polars collect
```
