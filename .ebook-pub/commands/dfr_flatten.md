# dfr flatten

**version**: 0.93.0

## **usage**:

An alias for dfr explode.

## Signature

`> dfr flatten ...rest`

## Parameters

- `...rest`: columns to flatten, only applicable for dataframes

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Flatten the specified dataframe

```bash
> [[id name hobbies]; [1 Mercy [Cycling Knitting]] [2 Bob [Skiing Football]]] | dfr into-df | dfr flatten hobbies | dfr collect
```

Select a column and flatten the values

```bash
> [[id name hobbies]; [1 Mercy [Cycling Knitting]] [2 Bob [Skiing Football]]] | dfr into-df | dfr select (dfr col hobbies | dfr flatten)
```
