# interleave

**version**: 0.100.1

## **usage**:

Read multiple streams in parallel and combine them into one stream.

## Signature

`> interleave ...rest --buffer-size`

## Parameters

- `...rest`: The closures that will generate streams to be combined.
- `--buffer-size {int}`: Number of items to buffer from the streams. Increases memory usage, but can help performance when lots of output is produced.

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| nothing     | list\<any\> |

## Examples

Read two sequences of numbers into separate columns of a table.
Note that the order of rows with 'a' columns and rows with 'b' columns is arbitrary.

```bash
> seq 1 50 | wrap a | interleave { seq 1 50 | wrap b }
```

Read two sequences of numbers, one from input. Sort for consistency.

```bash
> seq 1 3 | interleave { seq 4 6 } | sort
```

Read two sequences, but without any input. Sort for consistency.

```bash
> interleave { "foo\nbar\n" | lines } { "baz\nquux\n" | lines } | sort
```

Run two commands in parallel and annotate their output.

```bash
> (
interleave
    { nu -c "print hello; print world" | lines | each { "greeter: " ++ $in } }
    { nu -c "print nushell; print rocks" | lines | each { "evangelist: " ++ $in } }
)
```

Use a buffer to increase the performance of high-volume streams.

```bash
> seq 1 20000 | interleave --buffer-size 16 { seq 1 20000 } | math sum
```

## Notes

```text
This combinator is useful for reading output from multiple commands.

If input is provided to `interleave`, the input will be combined with the
output of the closures. This enables `interleave` to be used at any position
within a pipeline.

Because items from each stream will be inserted into the final stream as soon
as they are available, there is no guarantee of how the final output will be
ordered. However, the order of items from any given stream is guaranteed to be
preserved as they were in that stream.

If interleaving streams in a fair (round-robin) manner is desired, consider
using `zip { ... } | flatten` instead.
```
