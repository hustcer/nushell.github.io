# dfr cast

**version**: 0.93.0

## **usage**:

Cast a column to a different dtype.

## Signature

`> dfr cast (dtype) (column)`

## Parameters

- `dtype`: The dtype to cast the column to
- `column`: The column to cast. Required when used with a dataframe.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Cast a column in a dataframe to a different dtype

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr cast u8 a | dfr schema
```

Cast a column in a lazy dataframe to a different dtype

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr into-lazy | dfr cast u8 a | dfr schema
```

Cast a column in a expression to a different dtype

```bash
> [[a b]; [1 2] [1 4]] | dfr into-df | dfr group-by a | dfr agg [ (dfr col b | dfr cast u8 | dfr min | dfr as "b_min") ] | dfr schema
```
