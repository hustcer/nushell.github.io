# dfr first

**version**: 0.93.0

## **usage**:

Show only the first number of rows or create a first expression

## Signature

`> dfr first (rows)`

## Parameters

- `rows`: starting from the front, the number of rows to return

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Return the first row of a dataframe

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr first
```

Return the first two rows of a dataframe

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr first 2
```

Creates a first expression from a column

```bash
> dfr col a | dfr first
```
