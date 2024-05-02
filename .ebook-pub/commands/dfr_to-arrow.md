# dfr to-arrow

**version**: 0.93.0

## **usage**:

Saves dataframe to arrow file.

## Signature

`> dfr to-arrow (file)`

## Parameters

- `file`: file path to save dataframe

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Saves dataframe to arrow file

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr to-arrow test.arrow
```
