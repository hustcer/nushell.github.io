# dfr fill-null

**version**: 0.80.0

## **usage**:

Replaces NULL values with the given expression.

## Signature

`> dfr fill-null (fill)`

## Parameters

- `fill`: Expression to use to fill the null values

## Examples

Fills the null values by 0

```bash
> [1 2 2 3 3] | dfr into-df | dfr shift 2 | dfr fill-null 0
```
