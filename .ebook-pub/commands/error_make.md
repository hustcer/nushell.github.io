# error make

**version**: 0.80.0

## **usage**:

Create an error.

## Signature

`> error make (error_struct) --unspanned`

## Parameters

- `error_struct`: the error to create
- `--unspanned`: remove the origin label from the error

## Examples

Create a simple custom error

```bash
> error make {msg: "my custom error message"}
```

Create a more complex custom error

```bash
> error make {
        msg: "my custom error message"
        label: {
            text: "my custom label text"  # not mandatory unless $.label exists
            start: 123  # not mandatory unless $.label.end is set
            end: 456  # not mandatory unless $.label.start is set
        }
    }
```

Create a custom error for a custom command that shows the span of the argument

```bash
> def foo [x] {
        let span = (metadata $x).span;
        error make {
            msg: "this is fishy"
            label: {
                text: "fish right here"
                start: $span.start
                end: $span.end
            }
        }
    }
```
