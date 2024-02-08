# dfr select

**version**: 0.90.2

## **usage**:

Selects columns from lazyframe.

## Signature

`> dfr select ...rest`

## Parameters

- `...rest`: Expression(s) that define the column selection

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Select a column from the dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | dfr into-df | dfr select a
```
