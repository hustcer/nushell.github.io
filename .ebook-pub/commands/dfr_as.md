# dfr as

**version**: 0.93.0

## **usage**:

Creates an alias expression.

## Signature

`> dfr as (Alias name)`

## Parameters

- `Alias name`: Alias name for the expression

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates and alias expression

```bash
> dfr col a | dfr as new_a | dfr into-nu
```
