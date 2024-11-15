# to csv

**version**: 0.100.1

## **usage**:

Convert table into .csv text .

## Signature

`> to csv --separator --noheaders --columns`

## Parameters

- `--separator {string}`: a character to separate columns, defaults to ','
- `--noheaders`: do not output the columns names as the first row
- `--columns {list<string>}`: the names (in order) of the columns to use

## Input/output types:

| input  | output |
| ------ | ------ |
| record | string |
| table  | string |

## Examples

Outputs a CSV string representing the contents of this table

```bash
> [[foo bar]; [1 2]] | to csv
```

Outputs a CSV string representing the contents of this table

```bash
> [[foo bar]; [1 2]] | to csv --separator ';'
```

Outputs a CSV string representing the contents of this record

```bash
> {a: 1 b: 2} | to csv
```

Outputs a CSV stream with column names pre-determined

```bash
> [[foo bar baz]; [1 2 3]] | to csv --columns [baz foo]
```
