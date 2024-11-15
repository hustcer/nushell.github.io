# polars get

**version**: 0.100.1

## **usage**:

Creates dataframe with the selected columns.

## Signature

`> polars get ...rest`

## Parameters

- `...rest`: column names to sort dataframe

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns the selected column

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars get a
```
