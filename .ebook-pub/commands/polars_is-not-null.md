# polars is-not-null

**version**: 0.100.1

## **usage**:

Creates mask where value is not null.

## Signature

`> polars is-not-null `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create mask where values are not null

```bash
> let s = ([5 6 0 8] | polars into-df);
    let res = ($s / $s);
    $res | polars is-not-null
```

Creates a is not null expression from a column

```bash
> polars col a | polars is-not-null
```
