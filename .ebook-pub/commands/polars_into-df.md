# polars into-df

**version**: 0.100.1

## **usage**:

Converts a list, table or record into a dataframe.

## Signature

`> polars into-df --schema --as-columns`

## Parameters

- `--schema {record}`: Polars Schema in format [{name: str}]. CSV, JSON, and JSONL files
- `--as-columns`: When input shape is record of lists, treat each list as column values.

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Takes a dictionary and creates a dataframe

```bash
> [[a b];[1 2] [3 4]] | polars into-df
```

Takes a record of lists and creates a dataframe

```bash
> {a: [1 3], b: [2 4]} | polars into-df --as-columns
```

Takes a list of tables and creates a dataframe

```bash
> [[1 2 a] [3 4 b] [5 6 c]] | polars into-df
```

Takes a list and creates a dataframe

```bash
> [a b c] | polars into-df
```

Takes a list of booleans and creates a dataframe

```bash
> [true true false] | polars into-df
```

Convert to a dataframe and provide a schema

```bash
> [[a b c]; [1 {d: [1 2 3]} [10 11 12] ]]| polars into-df -s {a: u8, b: {d: list<u64>}, c: list<u8>}
```

Convert to a dataframe and provide a schema that adds a new column

```bash
> [[a b]; [1 "foo"] [2 "bar"]] | polars into-df -s {a: u8, b:str, c:i64} | polars fill-null 3
```
