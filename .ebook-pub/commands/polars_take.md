# polars take

**version**: 0.100.1

## **usage**:

Creates new dataframe using the given indices.

## Signature

`> polars take (indices)`

## Parameters

- `indices`: list of indices used to take data

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Takes selected rows from dataframe

```bash
> let df = ([[a b]; [4 1] [5 2] [4 3]] | polars into-df);
    let indices = ([0 2] | polars into-df);
    $df | polars take $indices
```

Takes selected rows from series

```bash
> let series = ([4 1 5 2 4 3] | polars into-df);
    let indices = ([0 2] | polars into-df);
    $series | polars take $indices
```
