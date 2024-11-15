# polars all-false

**version**: 0.100.1

## **usage**:

Returns true if all values are false.

## Signature

`> polars all-false `

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Returns true if all values are false

```bash
> [false false false] | polars into-df | polars all-false
```

Checks the result from a comparison

```bash
> let s = ([5 6 2 10] | polars into-df);
    let res = ($s > 9);
    $res | polars all-false
```
