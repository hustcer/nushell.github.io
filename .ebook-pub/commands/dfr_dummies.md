# dfr dummies

**version**: 0.80.0

## **usage**:

Creates a new dataframe with dummy variables.

## Signature

`> dfr dummies `

## Examples

Create new dataframe with dummy variables from a dataframe

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr dummies
```

Create new dataframe with dummy variables from a series

```bash
> [1 2 2 3 3] | dfr into-df | dfr dummies
```
