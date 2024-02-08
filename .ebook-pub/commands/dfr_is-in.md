# dfr is-in

**version**: 0.90.2

## **usage**:

Creates an is-in expression.

## Signature

`> dfr is-in (list)`

## Parameters

- `list`: List to check if values are in

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates a is-in expression

```bash
> let df = ([[a b]; [one 1] [two 2] [three 3]] | dfr into-df);
    $df | dfr with-column (dfr col a | dfr is-in [one two] | dfr as a_in)
```
