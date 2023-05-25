# dfr concatenate

**version**: 0.80.0

## **usage**:

Concatenates strings with other array.

## Signature

`> dfr concatenate (other)`

## Parameters

- `other`: Other array with string to be concatenated

## Examples

Concatenate string

```bash
> let other = ([za xs cd] | dfr into-df);
    [abc abc abc] | dfr into-df | dfr concatenate $other
```
