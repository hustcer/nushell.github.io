# dfr into-lazy

**version**: 0.93.0

## **usage**:

Converts a dataframe into a lazy dataframe.

## Signature

`> dfr into-lazy --schema`

## Parameters

- `--schema {record}`: Polars Schema in format [{name: str}]. CSV, JSON, and JSONL files

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Takes a dictionary and creates a lazy dataframe

```bash
> [[a b];[1 2] [3 4]] | dfr into-lazy
```
