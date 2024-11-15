# polars drop-nulls

**version**: 0.100.1

## **usage**:

Drops null values in dataframe.

## Signature

`> polars drop-nulls (subset)`

## Parameters

- `subset`: subset of columns to drop nulls

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

drop null values in dataframe

```bash
> let df = ([[a b]; [1 2] [3 0] [1 2]] | polars into-df);
    let res = ($df.b / $df.b);
    let a = ($df | polars with-column $res --name res);
    $a | polars drop-nulls
```

drop null values in dataframe

```bash
> let s = ([1 2 0 0 3 4] | polars into-df);
    ($s / $s) | polars drop-nulls
```
