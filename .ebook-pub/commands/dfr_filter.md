# dfr filter

**version**: 0.80.0

## **usage**:

Filter dataframe based in expression.

## Signature

`> dfr filter (filter expression)`

## Parameters

- `filter expression`: Expression that define the column selection

## Examples

Filter dataframe using an expression

```bash
> [[a b]; [6 2] [4 2] [2 2]] | dfr into-df | dfr filter ((dfr col a) >= 4)
```
