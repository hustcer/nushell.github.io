# dfr take

**version**: 0.85.0

## **usage**:

Creates new dataframe using the given indices.

## Signature

`> dfr take (indices)`

## Parameters

- `indices`: list of indices used to take data

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Takes selected rows from dataframe

```bash
> let df = ([[a b]; [4 1] [5 2] [4 3]] | dfr into-df);
    let indices = ([0 2] | dfr into-df);
    $df | dfr take $indices
```

Takes selected rows from series

```bash
> let series = ([4 1 5 2 4 3] | dfr into-df);
    let indices = ([0 2] | dfr into-df);
    $series | dfr take $indices
```
