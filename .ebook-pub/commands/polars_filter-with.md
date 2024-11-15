# polars filter-with

**version**: 0.100.1

## **usage**:

Filters dataframe using a mask or expression as reference.

## Signature

`> polars filter-with (mask or expression)`

## Parameters

- `mask or expression`: boolean mask used to filter data

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Filter dataframe using a bool mask

```bash
> let mask = ([true false] | polars into-df);
    [[a b]; [1 2] [3 4]] | polars into-df | polars filter-with $mask
```

Filter dataframe using an expression

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars filter-with ((polars col a) > 1)
```
