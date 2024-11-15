# from tsv

**version**: 0.90.2

## **usage**:

Parse text as .tsv and create table.

## Signature

`> from tsv --comment --quote --escape --noheaders --flexible --no-infer --trim`

## Parameters

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

Convert tab-separated data to a table

```bash
> "ColA	ColB
1	2" | from tsv
```

Create a tsv file with header columns and open it

```bash
> $'c1(char tab)c2(char tab)c3(char nl)1(char tab)2(char tab)3' | save tsv-data | open tsv-data | from tsv
```

Create a tsv file without header columns and open it

```bash
> $'a1(char tab)b1(char tab)c1(char nl)a2(char tab)b2(char tab)c2' | save tsv-data | open tsv-data | from tsv --noheaders
```

Create a tsv file without header columns and open it, removing all unnecessary whitespaces

```bash
> $'a1(char tab)b1(char tab)c1(char nl)a2(char tab)b2(char tab)c2' | save tsv-data | open tsv-data | from tsv --trim all
```

Create a tsv file without header columns and open it, removing all unnecessary whitespaces in the header names

```bash
> $'a1(char tab)b1(char tab)c1(char nl)a2(char tab)b2(char tab)c2' | save tsv-data | open tsv-data | from tsv --trim headers
```

Create a tsv file without header columns and open it, removing all unnecessary whitespaces in the field values

```bash
> $'a1(char tab)b1(char tab)c1(char nl)a2(char tab)b2(char tab)c2' | save tsv-data | open tsv-data | from tsv --trim fields
```
