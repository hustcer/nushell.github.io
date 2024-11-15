# collect

**version**: 0.100.1

## **usage**:

Collect a stream into a value.

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
> open file.txt | collect | save -f file.txt
```

## Notes

```text
If provided, run a closure with the collected value as input.

The entire stream will be collected into one value in memory, so if the stream
is particularly large, this can cause high memory usage.
```
