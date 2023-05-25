# dfr to-csv

**version**: 0.80.0

## **usage**:

Saves dataframe to CSV file.

## Signature

`> dfr to-csv (file) --delimiter --no-header`

## Parameters

- `file`: file path to save dataframe
- `--delimiter {string}`: file delimiter character
- `--no-header`: Indicates if file doesn't have header

## Examples

Saves dataframe to CSV file

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr to-csv test.csv
```

Saves dataframe to CSV file using other delimiter

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr to-csv test.csv -d '|'
```
