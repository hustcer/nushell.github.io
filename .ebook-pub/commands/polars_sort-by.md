# polars sort-by

**version**: 0.100.1

## **usage**:

Sorts a lazy dataframe based on expression(s).

## Signature

`> polars sort-by ...rest --reverse --nulls-last --maintain-order`

## Parameters

- `...rest`: sort expression for the dataframe
- `--reverse {list<bool>}`: Reverse sorting. Default is false
- `--nulls-last`: nulls are shown last in the dataframe
- `--maintain-order`: Maintains order during sort

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Sort dataframe by one column

```bash
> [[a b]; [6 2] [1 4] [4 1]] | polars into-df | polars sort-by a
```

Sort column using two columns

```bash
> [[a b]; [6 2] [1 1] [1 4] [2 4]] | polars into-df | polars sort-by [a b] -r [false true]
```
