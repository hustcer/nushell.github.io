# dfr to-jsonl

**version**: 0.85.0

## **usage**:

Saves dataframe to a JSON lines file.

## Signature

`> dfr to-jsonl (file)`

## Parameters

- `file`: file path to save dataframe

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Saves dataframe to JSON lines file

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr to-jsonl test.jsonl
```
