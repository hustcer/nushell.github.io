# dfr into-nu

**version**: 0.80.0

## **usage**:

Converts a section of the dataframe into nushell Table.

## Signature

`> dfr into-nu --rows --tail`

## Parameters

- `--rows {number}`: number of rows to be shown
- `--tail`: shows tail rows

## Examples

Shows head rows from dataframe

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr into-nu
```

Shows tail rows from dataframe

```bash
> [[a b]; [1 2] [5 6] [3 4]] | dfr into-df | dfr into-nu -t -n 1
```

# dfr into-nu

**version**: 0.80.0

## **usage**:

Convert expression into a nu value for access and exploration.

## Signature

`> dfr into-nu `

## Examples

Convert a col expression into a nushell value

```bash
> dfr col a | dfr into-nu
```
