# dfr drop

**version**: 0.93.0

## **usage**:

Creates a new dataframe by dropping the selected columns.

## Signature

`> dfr drop ...rest`

## Parameters

- `...rest`: column names to be dropped

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

drop column a

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr drop a
```
