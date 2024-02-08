# error make

**version**: 0.90.2

## **usage**:

Create an error.

## Signature

`> error make (error_struct) --unspanned`

## Parameters

- `error_struct`: The error to create.
- `--unspanned`: remove the origin label from the error

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

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
            # optional
            span: {
                # if $.label.span exists, both start and end must be present
                start: 123
                end: 456
            }
        }
        help: "A help string, suggesting a fix to the user"  # optional
    }
```

Create a custom error for a custom command that shows the span of the argument

```bash
> def foo [x] {
        error make {
            msg: "this is fishy"
            label: {
                text: "fish right here"
                span: (metadata $x).span
            }
        }
    }
```
