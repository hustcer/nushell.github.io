# dfr filter-with

**version**: 0.80.0

## **usage**:

Filters dataframe using a mask or expression as reference.

## Signature

`> dfr filter-with (mask or expression)`

## Parameters

- `mask or expression`: boolean mask used to filter data

## Examples

Filter dataframe using a bool mask

```bash
> let mask = ([true false] | dfr into-df);
    [[a b]; [1 2] [3 4]] | dfr into-df | dfr filter-with $mask
```

Filter dataframe using an expression

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr filter-with ((dfr col a) > 1)
```
