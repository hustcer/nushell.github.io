# dfr with-column

**version**: 0.90.2

## **usage**:

Adds a series to the dataframe.

## Signature

`> dfr with-column ...rest --name`

## Parameters

- `...rest`: series to be added or expressions used to define the new columns
- `--name {string}`: new column name

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Adds a series to the dataframe

```bash
> [[a b]; [1 2] [3 4]]
    | dfr into-df
    | dfr with-column ([5 6] | dfr into-df) --name c
```

Adds a series to the dataframe

```bash
> [[a b]; [1 2] [3 4]]
    | dfr into-lazy
    | dfr with-column [
        ((dfr col a) * 2 | dfr as "c")
        ((dfr col a) * 3 | dfr as "d")
      ]
    | dfr collect
```
