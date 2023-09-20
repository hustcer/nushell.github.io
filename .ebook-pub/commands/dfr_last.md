# dfr last

**version**: 0.85.0

## **usage**:

Creates new dataframe with tail rows or creates a last expression.

## Signature

`> dfr last (rows)`

## Parameters

- `rows`: Number of rows for tail

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create new dataframe with last rows

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr last 1
```

Creates a last expression from a column

```bash
> dfr col a | dfr last
```
