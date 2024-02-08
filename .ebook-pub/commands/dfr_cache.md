# dfr cache

**version**: 0.90.2

## **usage**:

Caches operations in a new LazyFrame.

## Signature

`> dfr cache `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Caches the result into a new LazyFrame

```bash
> [[a b]; [6 2] [4 2] [2 2]] | dfr into-df | dfr reverse | dfr cache
```
