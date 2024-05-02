# dfr drop-nulls

**version**: 0.93.0

## **usage**:

Drops null values in dataframe.

## Signature

`> dfr drop-nulls (subset)`

## Parameters

- `subset`: subset of columns to drop nulls

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

drop null values in dataframe

```bash
> let df = ([[a b]; [1 2] [3 0] [1 2]] | dfr into-df);
    let res = ($df.b / $df.b);
    let a = ($df | dfr with-column $res --name res);
    $a | dfr drop-nulls
```

drop null values in dataframe

```bash
> let s = ([1 2 0 0 3 4] | dfr into-df);
    ($s / $s) | dfr drop-nulls
```
