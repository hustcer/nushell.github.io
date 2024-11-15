# polars open

**version**: 0.100.1

## **usage**:

Opens CSV, JSON, NDJSON/JSON lines, arrow, avro, or parquet file to create dataframe. A lazy dataframe will be created by default, if supported.

## Signature

`> polars open (file) --eager --type --delimiter --no-header --infer-schema --skip-rows --columns --schema --truncate-ragged-lines`

## Parameters

- `file`: file path to load values from
- `--eager`: Open dataframe as an eager dataframe
- `--type {string}`: File type: csv, tsv, json, parquet, arrow, avro. If omitted, derive from file extension
- `--delimiter {string}`: file delimiter character. CSV file
- `--no-header`: Indicates if file doesn't have header. CSV file
- `--infer-schema {number}`: Number of rows to infer the schema of the file. CSV file
- `--skip-rows {number}`: Number of rows to skip from file. CSV file
- `--columns {list<string>}`: Columns to be selected from csv file. CSV and Parquet file
- `--schema {record}`: Polars Schema in format [{name: str}]. CSV, JSON, and JSONL files
- `--truncate-ragged-lines`: Truncate lines that are longer than the schema. CSV file

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Takes a file name and creates a dataframe

```bash
> polars open test.csv
```
