# dfr is-not-null

**version**: 0.90.2

## **usage**:

Creates mask where value is not null.

## Signature

`> dfr is-not-null `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create mask where values are not null

```bash
> let s = ([5 6 0 8] | dfr into-df);
    let res = ($s / $s);
    $res | dfr is-not-null
```

Creates a is not null expression from a column

```bash
> dfr col a | dfr is-not-null
```
