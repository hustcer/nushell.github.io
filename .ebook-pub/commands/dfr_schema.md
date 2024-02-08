# dfr schema

**version**: 0.90.2

## **usage**:

Show schema for a dataframe.

## Signature

`> dfr schema --datatype-list`

## Parameters

- `--datatype-list`: creates a lazy dataframe

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Dataframe schema

```bash
> [[a b]; [1 "foo"] [3 "bar"]] | dfr into-df | dfr schema
```
