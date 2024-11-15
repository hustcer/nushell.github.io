# polars implode

**version**: 0.100.1

## **usage**:

Aggregates values into a list.

## Signature

`> polars implode `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create two lists for columns a and b with all the rows as values.

```bash
> [[a b]; [1 4] [2 5] [3 6]] | polars into-df | polars select (polars col '*' | polars implode) | polars collect
```
