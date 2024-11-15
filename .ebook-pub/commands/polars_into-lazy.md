# polars into-lazy

**version**: 0.100.1

## **usage**:

Converts a dataframe into a lazy dataframe.

## Signature

`> polars into-lazy --schema`

## Parameters

- `--schema {record}`: Polars Schema in format [{name: str}]. CSV, JSON, and JSONL files

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Takes a table and creates a lazyframe

```bash
> [[a b];[1 2] [3 4]] | polars into-lazy
```

Takes a table, creates a lazyframe, assigns column 'b' type str, displays the schema

```bash
> [[a b];[1 2] [3 4]] | polars into-lazy --schema {b: str} | polars schema
```
