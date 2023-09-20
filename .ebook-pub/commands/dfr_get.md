# dfr get

**version**: 0.85.0

## **usage**:

Creates dataframe with the selected columns.

## Signature

`> dfr get ...rest`

## Parameters

- `...rest`: column names to sort dataframe

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns the selected column

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr get a
```
