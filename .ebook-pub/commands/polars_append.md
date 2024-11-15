# polars append

**version**: 0.100.1

## **usage**:

Appends a new dataframe.

## Signature

`> polars append (other) --col`

## Parameters

- `other`: other dataframe to append
- `--col`: append as new columns instead of rows

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Appends a dataframe as new columns

```bash
> let a = ([[a b]; [1 2] [3 4]] | polars into-df);
    $a | polars append $a
```

Appends a dataframe merging at the end of columns

```bash
> let a = ([[a b]; [1 2] [3 4]] | polars into-df); $a | polars append $a --col
```
