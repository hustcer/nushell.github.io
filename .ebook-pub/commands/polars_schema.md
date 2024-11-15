# polars schema

**version**: 0.100.1

## **usage**:

Show schema for a dataframe.

## Signature

`> polars schema --datatype-list`

## Parameters

- `--datatype-list`: creates a lazy dataframe

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Dataframe schema

```bash
> [[a b]; [1 "foo"] [3 "bar"]] | polars into-df | polars schema
```
