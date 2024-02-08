# dfr rolling

**version**: 0.90.2

## **usage**:

Rolling calculation for a series.

## Signature

`> dfr rolling (type) (window)`

## Parameters

- `type`: rolling operation
- `window`: Window size for rolling

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Rolling sum for a series

```bash
> [1 2 3 4 5] | dfr into-df | dfr rolling sum 2 | dfr drop-nulls
```

Rolling max for a series

```bash
> [1 2 3 4 5] | dfr into-df | dfr rolling max 2 | dfr drop-nulls
```
