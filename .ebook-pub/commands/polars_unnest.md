# polars unnest

**version**: 0.100.1

## **usage**:

Decompose struct columns into separate columns for each of their fields. The new columns will be inserted into the dataframe at the location of the struct column.

## Signature

`> polars unnest ...rest`

## Parameters

- `...rest`: columns to unnest

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Unnest a dataframe

```bash
> [[id person]; [1 {name: "Bob", age: 36}] [2 {name: "Betty", age: 63}]]
                    | polars into-df -s {id: i64, person: {name: str, age: u8}}
                    | polars unnest person
                    | polars get id name age
                    | polars sort-by id
```

Unnest a lazy dataframe

```bash
> [[id person]; [1 {name: "Bob", age: 36}] [2 {name: "Betty", age: 63}]]
                    | polars into-df -s {id: i64, person: {name: str, age: u8}}
                    | polars into-lazy
                    | polars unnest person
                    | polars select (polars col id) (polars col name) (polars col age)
                    | polars collect
                    | polars sort-by id
```
