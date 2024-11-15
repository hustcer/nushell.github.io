# polars cache

**version**: 0.100.1

## **usage**:

Caches operations in a new LazyFrame.

## Signature

`> polars cache `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Caches the result into a new LazyFrame

```bash
> [[a b]; [6 2] [4 2] [2 2]] | polars into-df
                | polars reverse
                | polars cache
                | polars sort-by a
```
