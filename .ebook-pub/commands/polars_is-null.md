# polars is-null

**version**: 0.100.1

## **usage**:

Creates mask where value is null.

## Signature

`> polars is-null `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create mask where values are null

```bash
> let s = ([5 6 0 8] | polars into-df);
    let res = ($s / $s);
    $res | polars is-null
```

Creates a is null expression from a column

```bash
> polars col a | polars is-null
```
