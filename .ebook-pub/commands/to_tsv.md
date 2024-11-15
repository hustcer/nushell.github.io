# to tsv

**version**: 0.100.1

## **usage**:

Convert table into .tsv text.

## Signature

`> to tsv --noheaders --columns`

## Parameters

- `--noheaders`: do not output the column names as the first row
- `--columns {list<string>}`: the names (in order) of the columns to use

## Input/output types:

| input  | output |
| ------ | ------ |
| record | string |
| table  | string |

## Examples

Outputs a TSV string representing the contents of this table

```bash
> [[foo bar]; [1 2]] | to tsv
```

Outputs a TSV string representing the contents of this record

```bash
> {a: 1 b: 2} | to tsv
```

Outputs a TSV stream with column names pre-determined

```bash
> [[foo bar baz]; [1 2 3]] | to tsv --columns [baz foo]
```
