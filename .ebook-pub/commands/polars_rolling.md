# polars rolling

**version**: 0.100.1

## **usage**:

Rolling calculation for a series.

## Signature

`> polars rolling (type) (window)`

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
> [1 2 3 4 5] | polars into-df | polars rolling sum 2 | polars drop-nulls
```

Rolling max for a series

```bash
> [1 2 3 4 5] | polars into-df | polars rolling max 2 | polars drop-nulls
```
