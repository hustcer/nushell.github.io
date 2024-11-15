# polars first

**version**: 0.100.1

## **usage**:

Show only the first number of rows or create a first expression

## Signature

`> polars first (rows)`

## Parameters

- `rows`: starting from the front, the number of rows to return

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Return the first row of a dataframe

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars first
```

Return the first two rows of a dataframe

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars first 2
```

Creates a first expression from a column

```bash
> polars col a | polars first
```
