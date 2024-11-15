# polars with-column

**version**: 0.100.1

## **usage**:

Adds a series to the dataframe.

## Signature

`> polars with-column ...rest --name`

## Parameters

- `...rest`: series to be added or expressions used to define the new columns
- `--name {string}`: new column name

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Adds a series to the dataframe

```bash
> [[a b]; [1 2] [3 4]]
    | polars into-df
    | polars with-column ([5 6] | polars into-df) --name c
```

Adds a series to the dataframe

```bash
> [[a b]; [1 2] [3 4]]
    | polars into-lazy
    | polars with-column [
        ((polars col a) * 2 | polars as "c")
        ((polars col a) * 3 | polars as "d")
      ]
    | polars collect
```
