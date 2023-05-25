# dfr first

**version**: 0.80.0

## **usage**:

Show only the first number of rows.

## Signature

`> dfr first (rows)`

## Parameters

- `rows`: starting from the front, the number of rows to return

## Examples

Return the first row of a dataframe

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr first
```

Return the first two rows of a dataframe

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr first 2
```

# dfr first

**version**: 0.80.0

## **usage**:

creates a first expression

## Signature

`> dfr first `

## Examples

Creates a first expression from a column

```bash
> dfr col a | dfr first
```
