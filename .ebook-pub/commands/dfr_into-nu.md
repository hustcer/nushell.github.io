# dfr into-nu

**version**: 0.90.2

## **usage**:

Converts a dataframe or an expression into into nushell value for access and exploration.

## Signature

`> dfr into-nu --rows --tail`

## Parameters

- `--rows {number}`: number of rows to be shown
- `--tail`: shows tail rows

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Shows head rows from dataframe

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr into-nu
```

Shows tail rows from dataframe

```bash
> [[a b]; [1 2] [5 6] [3 4]] | dfr into-df | dfr into-nu --tail --rows 1
```

Convert a col expression into a nushell value

```bash
> dfr col a | dfr into-nu
```
