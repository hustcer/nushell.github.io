# polars is-in

**version**: 0.100.1

## **usage**:

Creates an is-in expression or checks to see if the elements are contained in the right series

## Signature

`> polars is-in (list)`

## Parameters

- `list`: List to check if values are in

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates a is-in expression

```bash
> let df = ([[a b]; [one 1] [two 2] [three 3]] | polars into-df);
            $df | polars with-column (polars col a | polars is-in [one two] | polars as a_in)
```

Checks if elements from a series are contained in right series

```bash
> let other = ([1 3 6] | polars into-df);
            [5 6 6 6 8 8 8] | polars into-df | polars is-in $other
```
