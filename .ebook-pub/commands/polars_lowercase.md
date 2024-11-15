# polars lowercase

**version**: 0.100.1

## **usage**:

Lowercase the strings in the column.

## Signature

`> polars lowercase `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Modifies strings in a column to lowercase

```bash
> [[a]; [Abc]] | polars into-df | polars select (polars col a | polars lowercase) | polars collect
```

Modifies strings to lowercase

```bash
> [Abc aBc abC] | polars into-df | polars lowercase
```
