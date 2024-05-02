# collect

**version**: 0.93.0

## **usage**:

Collect a stream into a value and then run a closure with the collected value as input.

## Signature

`> collect (closure) --keep-env`

## Parameters

- `closure`: The closure to run once the stream is collected.
- `--keep-env`: let the closure affect environment variables

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Use the second value in the stream

```bash
> [1 2 3] | collect { |x| $x.1 }
```

Read and write to the same file

```bash
> open file.txt | collect { save -f file.txt }
```
