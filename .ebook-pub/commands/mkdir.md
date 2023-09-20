# mkdir

**version**: 0.85.0

## **usage**:

Make directories, creates intermediary directories as required.

## Signature

`> mkdir ...rest --verbose`

## Parameters

- `...rest`: the name(s) of the path(s) to create
- `--verbose`: print created path(s).

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
