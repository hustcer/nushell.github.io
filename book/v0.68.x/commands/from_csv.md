---
title: from csv
version: 0.68.0
usage: |
  Parse text as .csv and create table.
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> from csv --separator --noheaders --no-infer --trim```

## Parameters

 -  `--separator {string}`: a character to separate columns, defaults to ','
 -  `--noheaders`: don't treat the first row as column names
 -  `--no-infer`: no field type inferencing
 -  `--trim {string}`: drop leading and trailing whitespaces around headers names and/or field values

## Examples

Convert comma-separated data to a table
```shell
> open data.txt | from csv
```

Convert comma-separated data to a table, ignoring headers
```shell
> open data.txt | from csv --noheaders
```

Convert comma-separated data to a table, ignoring headers
```shell
> open data.txt | from csv -n
```

Convert semicolon-separated data to a table
```shell
> open data.txt | from csv --separator ';'
```

Convert semicolon-separated data to a table, dropping all possible whitespaces around header names and field values
```shell
> open data.txt | from csv --trim all
```

Convert semicolon-separated data to a table, dropping all possible whitespaces around header names
```shell
> open data.txt | from csv --trim headers
```

Convert semicolon-separated data to a table, dropping all possible whitespaces around field values
```shell
> open data.txt | from csv --trim fields
```