# window

**version**: 0.90.2

## **usage**:

Creates a sliding window of `window_size` that slide by n rows/elements across input.

## Signature

`> window (window_size) --stride --remainder`

## Parameters

- `window_size`: The size of each window.
- `--stride {int}`: the number of rows to slide over between windows
- `--remainder`: yield last chunks even if they have fewer elements than size

## Input/output types:

| input       | output              |
| ----------- | ------------------- |
| list\<any\> | list\<list\<any\>\> |

## Examples

A sliding window of two elements

```bash
> [1 2 3 4] | window 2
```

A sliding window of two elements, with a stride of 3

```bash
> [1, 2, 3, 4, 5, 6, 7, 8] | window 2 --stride 3
```

A sliding window of equal stride that includes remainder. Equivalent to chunking

```bash
> [1, 2, 3, 4, 5] | window 3 --stride 3 --remainder
```
