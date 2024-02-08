# dfr append

**version**: 0.90.2

## **usage**:

Appends a new dataframe.

## Signature

`> dfr append (other) --col`

## Parameters

- `other`: dataframe to be appended
- `--col`: appends in col orientation

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Appends a dataframe as new columns

```bash
> let a = ([[a b]; [1 2] [3 4]] | dfr into-df);
    $a | dfr append $a
```

Appends a dataframe merging at the end of columns

```bash
> let a = ([[a b]; [1 2] [3 4]] | dfr into-df);
    $a | dfr append $a --col
```
