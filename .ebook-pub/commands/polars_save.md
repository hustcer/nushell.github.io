# polars save

**version**: 0.100.1

## **usage**:

Saves a dataframe to disk. For lazy dataframes a sink operation will be used if the file type supports it (parquet, ipc/arrow, csv, and ndjson).

## Signature

`> polars save (path) --type --avro-compression --csv-delimiter --csv-no-header`

## Parameters

- `path`: Path to write to.
- `--type {string}`: File type: csv, json, parquet, arrow/ipc. If omitted, derive from file extension
- `--avro-compression {string}`: Compression for avro supports deflate or snappy
- `--csv-delimiter {string}`: file delimiter character
- `--csv-no-header`: Indicates to exclude a header row for CSV files.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | string |

## Examples

Performs a streaming collect and save the output to the specified file

```bash
> [[a b];[1 2] [3 4]] | polars into-lazy | polars save test.parquet
```

Saves dataframe to parquet file

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars save test.parquet
```

Saves dataframe to arrow file

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars save test.arrow
```

Saves dataframe to NDJSON file

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars save test.ndjson
```

Saves dataframe to avro file

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars save test.avro
```

Saves dataframe to CSV file

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr save test.csv
```

Saves dataframe to CSV file using other delimiter

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr save test.csv --delimiter '|'
```
