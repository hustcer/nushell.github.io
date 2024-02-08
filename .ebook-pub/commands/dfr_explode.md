# dfr explode

**version**: 0.90.2

## **usage**:

Explodes a dataframe or creates a explode expression.

## Signature

`> dfr explode ...rest`

## Parameters

- `...rest`: columns to explode, only applicable for dataframes

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Explode the specified dataframe

```bash
> [[id name hobbies]; [1 Mercy [Cycling Knitting]] [2 Bob [Skiing Football]]] | dfr into-df | dfr explode hobbies | dfr collect
```

Select a column and explode the values

```bash
> [[id name hobbies]; [1 Mercy [Cycling Knitting]] [2 Bob [Skiing Football]]] | dfr into-df | dfr select (dfr col hobbies | dfr explode)
```
