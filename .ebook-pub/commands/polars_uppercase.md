# polars uppercase

**version**: 0.100.1

## **usage**:

Uppercase the strings in the column.

## Signature

`> polars uppercase `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Modifies strings in a column to uppercase

```bash
> [[a]; [Abc]] | polars into-df | polars select (polars col a | polars uppercase) | polars collect
```

Modifies strings to uppercase

```bash
> [Abc aBc abC] | polars into-df | polars uppercase
```
