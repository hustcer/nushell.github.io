# to csv

**version**: 0.80.0

## **usage**:

Convert table into .csv text .

## Signature

`> to csv --separator --noheaders`

## Parameters

- `--separator {string}`: a character to separate columns, defaults to ','
- `--noheaders`: do not output the columns names as the first row

## Examples

Outputs an CSV string representing the contents of this table

```bash
> [[foo bar]; [1 2]] | to csv
```

Outputs an CSV string representing the contents of this table

```bash
> [[foo bar]; [1 2]] | to csv -s ';'
```

Outputs an CSV string representing the contents of this record

```bash
> {a: 1 b: 2} | to csv
```
