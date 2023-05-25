# dfr shift

**version**: 0.80.0

## **usage**:

Shifts the values by a given period.

## Signature

`> dfr shift (period) --fill`

## Parameters

- `period`: shift period
- `--fill {any}`: Expression used to fill the null values (lazy df)

## Examples

Shifts the values by a given period

```bash
> [1 2 2 3 3] | dfr into-df | dfr shift 2 | dfr drop-nulls
```
