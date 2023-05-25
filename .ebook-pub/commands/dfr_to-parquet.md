# dfr to-parquet

**version**: 0.80.0

## **usage**:

Saves dataframe to parquet file.

## Signature

`> dfr to-parquet (file)`

## Parameters

- `file`: file path to save dataframe

## Examples

Saves dataframe to parquet file

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr to-parquet test.parquet
```
