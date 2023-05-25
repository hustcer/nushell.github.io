# dfr get

**version**: 0.80.0

## **usage**:

Creates dataframe with the selected columns.

## Signature

`> dfr get ...rest`

## Parameters

- `...rest`: column names to sort dataframe

## Examples

Returns the selected column

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr get a
```
