# dfr is-not-null

**version**: 0.80.0

## **usage**:

Creates mask where value is not null.

## Signature

`> dfr is-not-null `

## Examples

Create mask where values are not null

```bash
> let s = ([5 6 0 8] | dfr into-df);
    let res = ($s / $s);
    $res | dfr is-not-null
```

# dfr is-not-null

**version**: 0.80.0

## **usage**:

creates a is not null expression

## Signature

`> dfr is-not-null `

## Examples

Creates a is not null expression from a column

```bash
> dfr col a | dfr is-not-null
```
