# dfr drop

**version**: 0.80.0

## **usage**:

Creates a new dataframe by dropping the selected columns.

## Signature

`> dfr drop ...rest`

## Parameters

- `...rest`: column names to be dropped

## Examples

drop column a

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr drop a
```
