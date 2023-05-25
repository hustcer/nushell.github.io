# collect

**version**: 0.80.0

## **usage**:

Collect the stream and pass it to a block.

## Signature

`> collect (closure) --keep-env`

## Parameters

- `closure`: the closure to run once the stream is collected
- `--keep-env`: let the block affect environment variables

## Examples

Use the second value in the stream

```bash
> [1 2 3] | collect { |x| $x.1 }
```
