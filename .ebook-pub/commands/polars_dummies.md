# polars dummies

**version**: 0.100.1

## **usage**:

Creates a new dataframe with dummy variables.

## Signature

`> polars dummies --drop-first`

## Parameters

- `--drop-first`: Drop first row

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create new dataframe with dummy variables from a dataframe

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars dummies
```

Create new dataframe with dummy variables from a series

```bash
> [1 2 2 3 3] | polars into-df | polars dummies
```
