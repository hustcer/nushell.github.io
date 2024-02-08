# dfr std

**version**: 0.90.2

## **usage**:

Creates a std expression for an aggregation of std value from columns in a dataframe.

## Signature

`> dfr std `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Std value from columns in a dataframe

```bash
> [[a b]; [6 2] [4 2] [2 2]] | dfr into-df | dfr std
```

Std aggregation for a group-by

```bash
> [[a b]; [one 2] [one 2] [two 1] [two 1]]
    | dfr into-df
    | dfr group-by a
    | dfr agg (dfr col b | dfr std)
```
