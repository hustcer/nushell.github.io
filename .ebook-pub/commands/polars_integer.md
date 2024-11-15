# polars integer

**version**: 0.100.1

## **usage**:

Converts a string column into a integer column

## Signature

`> polars integer `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Modifies strings to integer

```bash
> [[a b]; [1, '2']] | polars into-df | polars select (polars col b | polars integer) | polars collect
```
