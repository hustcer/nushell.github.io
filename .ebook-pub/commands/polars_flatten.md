# polars flatten

**version**: 0.100.1

## **usage**:

An alias for polars explode.

## Signature

`> polars flatten ...rest`

## Parameters

- `...rest`: columns to flatten, only applicable for dataframes

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Flatten the specified dataframe

```bash
> [[id name hobbies]; [1 Mercy [Cycling Knitting]] [2 Bob [Skiing Football]]] | polars into-df | polars flatten hobbies | polars collect
```

Select a column and flatten the values

```bash
> [[id name hobbies]; [1 Mercy [Cycling Knitting]] [2 Bob [Skiing Football]]] | polars into-df | polars select (polars col hobbies | polars flatten)
```
