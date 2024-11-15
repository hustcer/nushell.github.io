# polars contains

**version**: 0.100.1

## **usage**:

Checks if a pattern is contained in a string.

## Signature

`> polars contains (pattern)`

## Parameters

- `pattern`: Regex pattern to be searched

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns boolean indicating if pattern was found in a column

```bash
> let df = [[a]; [abc] [acb] [acb]] | polars into-df;
                let df2 = $df | polars with-column [(polars col a | polars contains ab | polars as b)] | polars collect;
                $df2.b
```

Returns boolean indicating if pattern was found

```bash
> [abc acb acb] | polars into-df | polars contains ab
```
