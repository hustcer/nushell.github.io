# dfr cumulative

**version**: 0.85.0

## **usage**:

Cumulative calculation for a series.

## Signature

`> dfr cumulative (type) --reverse`

## Parameters

- `type`: rolling operation
- `--reverse`: Reverse cumulative calculation

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Cumulative sum for a series

```bash
> [1 2 3 4 5] | dfr into-df | dfr cumulative sum
```
