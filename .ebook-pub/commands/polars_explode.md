# polars explode

**version**: 0.100.1

## **usage**:

Explodes a dataframe or creates a explode expression.

## Signature

`> polars explode ...rest`

## Parameters

- `...rest`: columns to explode, only applicable for dataframes

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Explode the specified dataframe

```bash
> [[id name hobbies]; [1 Mercy [Cycling Knitting]] [2 Bob [Skiing Football]]]
                    | polars into-df
                    | polars explode hobbies
                    | polars collect
                    | polars sort-by [id, name]
```

Select a column and explode the values

```bash
> [[id name hobbies]; [1 Mercy [Cycling Knitting]] [2 Bob [Skiing Football]]] | polars into-df | polars select (polars col hobbies | polars explode)
```
