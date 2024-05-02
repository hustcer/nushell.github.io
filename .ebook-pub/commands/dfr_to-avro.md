# dfr to-avro

**version**: 0.93.0

## **usage**:

Saves dataframe to avro file.

## Signature

`> dfr to-avro (file) --compression`

## Parameters

- `file`: file path to save dataframe
- `--compression {string}`: use compression, supports deflate or snappy

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Saves dataframe to avro file

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr to-avro test.avro
```
