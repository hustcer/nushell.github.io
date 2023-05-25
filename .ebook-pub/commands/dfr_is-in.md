# dfr is-in

**version**: 0.80.0

## **usage**:

Checks if elements from a series are contained in right series.

## Signature

`> dfr is-in (other)`

## Parameters

- `other`: right series

## Examples

Checks if elements from a series are contained in right series

```bash
> let other = ([1 3 6] | dfr into-df);
    [5 6 6 6 8 8 8] | dfr into-df | dfr is-in $other
```

# dfr is-in

**version**: 0.80.0

## **usage**:

Creates an is-in expression.

## Signature

`> dfr is-in (list)`

## Parameters

- `list`: List to check if values are in

## Examples

Creates a is-in expression

```bash
> let df = ([[a b]; [one 1] [two 2] [three 3]] | dfr into-df);
    $df | dfr with-column (dfr col a | dfr is-in [one two] | dfr as a_in)
```
