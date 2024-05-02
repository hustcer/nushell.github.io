# dfr is-null

**version**: 0.93.0

## **usage**:

Creates mask where value is null.

## Signature

`> dfr is-null `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Create mask where values are null

```bash
> let s = ([5 6 0 8] | dfr into-df);
    let res = ($s / $s);
    $res | dfr is-null
```

Creates a is null expression from a column

```bash
> dfr col a | dfr is-null
```
