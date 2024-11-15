# polars count-null

**version**: 0.100.1

## **usage**:

Counts null values.

## Signature

`> polars count-null `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Counts null values

```bash
> let s = ([1 1 0 0 3 3 4] | polars into-df);
    ($s / $s) | polars count-null
```
