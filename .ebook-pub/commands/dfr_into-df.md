# dfr into-df

**version**: 0.90.2

## **usage**:

Converts a list, table or record into a dataframe.

## Signature

`> dfr into-df --schema`

## Parameters

- `--schema {record}`: Polars Schema in format [{name: str}]. CSV, JSON, and JSONL files

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Takes a dictionary and creates a dataframe

```bash
> [[a b];[1 2] [3 4]] | dfr into-df
```

Takes a list of tables and creates a dataframe

```bash
> [[1 2 a] [3 4 b] [5 6 c]] | dfr into-df
```

Takes a list and creates a dataframe

```bash
> [a b c] | dfr into-df
```

Takes a list of booleans and creates a dataframe

```bash
> [true true false] | dfr into-df
```

Convert to a dataframe and provide a schema

```bash
> {a: 1, b: {a: [1 2 3]}, c: [a b c]}| dfr into-df -s {a: u8, b: {a: list<u64>}, c: list<str>}
```
