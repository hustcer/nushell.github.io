# polars agg-groups

**version**: 0.100.1

## **usage**:

Creates an agg_groups expression.

## Signature

`> polars agg-groups `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Get the groiup index of the group by operations.

```bash
> [[group value]; [one 94] [one 95] [one 96] [two 97] [two 98] [two 99]]
                | polars into-df
                | polars group-by group
                | polars agg (polars col value | polars agg-groups)
                | polars collect
                | polars sort-by group
```
