# dfr fill-nan

**version**: 0.93.0

## **usage**:

Replaces NaN values with the given expression.

## Signature

`> dfr fill-nan (fill)`

## Parameters

- `fill`: Expression to use to fill the NAN values

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Fills the NaN values with 0

```bash
> [1 2 NaN 3 NaN] | dfr into-df | dfr fill-nan 0
```

Fills the NaN values of a whole dataframe

```bash
> [[a b]; [0.2 1] [0.1 NaN]] | dfr into-df | dfr fill-nan 0
```
