# dfr fetch

**version**: 0.80.0

## **usage**:

collects the lazyframe to the selected rows.

## Signature

`> dfr fetch (rows)`

## Parameters

- `rows`: number of rows to be fetched from lazyframe

## Examples

Fetch a rows from the dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | dfr into-df | dfr fetch 2
```
