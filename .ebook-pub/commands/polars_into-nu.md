# polars into-nu

**version**: 0.100.1

## **usage**:

Converts a dataframe or an expression into nushell value for access and exploration.

## Signature

`> polars into-nu --rows --tail --index`

## Parameters

- `--rows {number}`: number of rows to be shown
- `--tail`: shows tail rows
- `--index`: add an index column

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Shows head rows from dataframe

```bash
> [[a b]; [1 2] [3 4]] | polars into-df | polars into-nu --index
```

Shows tail rows from dataframe

```bash
> [[a b]; [1 2] [5 6] [3 4]] | polars into-df | polars into-nu --tail --rows 1 --index
```

Convert a col expression into a nushell value

```bash
> polars col a | polars into-nu --index
```
