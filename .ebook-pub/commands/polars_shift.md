# polars shift

**version**: 0.100.1

## **usage**:

Shifts the values by a given period.

## Signature

`> polars shift (period) --fill`

## Parameters

- `period`: shift period
- `--fill {any}`: Expression used to fill the null values (lazy df)

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Shifts the values by a given period

```bash
> [1 2 2 3 3] | polars into-df | polars shift 2 | polars drop-nulls
```

Shifts the values by a given period, fill absent values with 0

```bash
> [1 2 2 3 3] | polars into-lazy | polars shift 2 --fill 0 | polars collect
```
