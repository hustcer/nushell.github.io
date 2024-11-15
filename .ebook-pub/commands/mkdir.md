# mkdir

**version**: 0.100.1

## **usage**:

Create directories, with intermediary directories if required using uutils/coreutils mkdir.

## Signature

`> mkdir ...rest --verbose`

## Parameters

- `...rest`: The name(s) of the path(s) to create.
- `--verbose`: print a message for each created directory.

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Make a directory named foo

```bash
> mkdir foo
```

Make multiple directories and show the paths created

```bash
> mkdir -v foo/bar foo2
```
