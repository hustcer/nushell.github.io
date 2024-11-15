# polars set-with-idx

**version**: 0.100.1

## **usage**:

Sets value in the given index.

## Signature

`> polars set-with-idx (value) --indices`

## Parameters

- `value`: value to be inserted in series
- `--indices {any}`: list of indices indicating where to set the value

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Set value in selected rows from series

```bash
> let series = ([4 1 5 2 4 3] | polars into-df);
    let indices = ([0 2] | polars into-df);
    $series | polars set-with-idx 6 --indices $indices
```
