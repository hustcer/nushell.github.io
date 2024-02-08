# dfr slice

**version**: 0.90.2

## **usage**:

Creates new dataframe from a slice of rows.

## Signature

`> dfr slice (offset) (size)`

## Parameters

- `offset`: start of slice
- `size`: size of slice

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create new dataframe from a slice of the rows

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr slice 0 1
```
