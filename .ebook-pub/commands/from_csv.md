# from csv

**version**: 0.90.2

## **usage**:

Parse text as .csv and create table.

## Signature

`> from csv --separator --comment --quote --escape --noheaders --flexible --no-infer --trim`

## Parameters

- `--separator {string}`: a character to separate columns (either single char or 4 byte unicode sequence), defaults to ','
- `--comment {string}`: a comment character to ignore lines starting with it
- `--quote {string}`: a quote character to ignore separators in strings, defaults to '"'
- `--escape {string}`: an escape character for strings containing the quote character
- `--noheaders`: don't treat the first row as column names
- `--flexible`: allow the number of fields in records to be variable
- `--no-infer`: no field type inferencing
- `--trim {string}`: drop leading and trailing whitespaces around headers names and/or field values

## Input/output types:

| input  | output |
| ------ | ------ |
| string | table  |

## Examples

Convert comma-separated data to a table

```bash
> "ColA,ColB
1,2" | from csv
```

Convert comma-separated data to a table, ignoring headers

```bash
> open data.txt | from csv --noheaders
```

Convert semicolon-separated data to a table

```bash
> open data.txt | from csv --separator ';'
```

Convert comma-separated data to a table, ignoring lines starting with '#'

```bash
> open data.txt | from csv --comment '#'
```

Convert comma-separated data to a table, dropping all possible whitespaces around header names and field values

```bash
> open data.txt | from csv --trim all
```

Convert comma-separated data to a table, dropping all possible whitespaces around header names

```bash
> open data.txt | from csv --trim headers
```

Convert comma-separated data to a table, dropping all possible whitespaces around field values

```bash
> open data.txt | from csv --trim fields
```
