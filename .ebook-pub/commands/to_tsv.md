# to tsv

**version**: 0.80.0

## **usage**:

Convert table into .tsv text.

## Signature

`> to tsv --noheaders`

## Parameters

- `--noheaders`: do not output the column names as the first row

## Examples

Outputs an TSV string representing the contents of this table

```bash
> [[foo bar]; [1 2]] | to tsv
```

Outputs an TSV string representing the contents of this record

```bash
> {a: 1 b: 2} | to tsv
```
