# dfr set-with-idx

**version**: 0.80.0

## **usage**:

Sets value in the given index.

## Signature

`> dfr set-with-idx (value) --indices`

## Parameters

- `value`: value to be inserted in series
- `--indices {any}`: list of indices indicating where to set the value

## Examples

Set value in selected rows from series

```bash
> let series = ([4 1 5 2 4 3] | dfr into-df);
    let indices = ([0 2] | dfr into-df);
    $series | dfr set-with-idx 6 -i $indices
```
