# transpose

**version**: 0.93.0

## **usage**:

Transposes the table contents so rows become columns and columns become rows.

## Signature

`> transpose ...rest --header-row --ignore-titles --as-record --keep-last --keep-all`

## Parameters

- `...rest`: The names to give columns once transposed.
- `--header-row`: treat the first row as column names
- `--ignore-titles`: don't transpose the column names into values
- `--as-record`: transfer to record if the result is a table and contains only one row
- `--keep-last`: on repetition of record fields due to `header-row`, keep the last value obtained
- `--keep-all`: on repetition of record fields due to `header-row`, keep all the values obtained

## Input/output types:

| input  | output |
| ------ | ------ |
| record | table  |
| table  | any    |

## Examples

Transposes the table contents with default column names

```bash
> [[c1 c2]; [1 2]] | transpose
```

Transposes the table contents with specified column names

```bash
> [[c1 c2]; [1 2]] | transpose key val
```

Transposes the table without column names and specify a new column name

```bash
> [[c1 c2]; [1 2]] | transpose --ignore-titles val
```

Transfer back to record with -d flag

```bash
> {c1: 1, c2: 2} | transpose | transpose --ignore-titles -r -d
```
