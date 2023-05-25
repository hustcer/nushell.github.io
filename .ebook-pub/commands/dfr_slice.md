# dfr slice

**version**: 0.80.0

## **usage**:

Creates new dataframe from a slice of rows.

## Signature

`> dfr slice (offset) (size)`

## Parameters

- `offset`: start of slice
- `size`: size of slice

## Examples

Create new dataframe from a slice of the rows

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr slice 0 1
```
