# collect

**version**: 0.90.2

## **usage**:

Collect the stream and pass it to a block.

## Signature

`> collect (closure) --keep-env`

## Parameters

- `closure`: The closure to run once the stream is collected.
- `--keep-env`: let the block affect environment variables

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Use the second value in the stream

```bash
> [1 2 3] | collect { |x| $x.1 }
```
