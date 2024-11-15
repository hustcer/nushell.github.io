# polars all-true

**version**: 0.100.1

## **usage**:

Returns true if all values are true.

## Signature

`> polars all-true `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns true if all values are true

```bash
> [true true true] | polars into-df | polars all-true
```

Checks the result from a comparison

```bash
> let s = ([5 6 2 8] | polars into-df);
    let res = ($s > 9);
    $res | polars all-true
```
