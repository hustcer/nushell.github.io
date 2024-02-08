# dfr concatenate

**version**: 0.90.2

## **usage**:

Concatenates strings with other array.

## Signature

`> dfr concatenate (other)`

## Parameters

- `other`: Other array with string to be concatenated

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Concatenate string

```bash
> let other = ([za xs cd] | dfr into-df);
    [abc abc abc] | dfr into-df | dfr concatenate $other
```
