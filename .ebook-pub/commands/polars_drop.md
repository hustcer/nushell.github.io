# polars drop

**version**: 0.100.1

## **usage**:

Creates a new dataframe by dropping the selected columns.

## Signature

`> polars drop ...rest`

## Parameters

- `...rest`: column names to be dropped

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

drop column a

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars drop a
```
