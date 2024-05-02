# overlay list

**version**: 0.93.0

## **usage**:

List all active overlays.

## Signature

`> overlay list `

## Input/output types:

| input   | output         |
| ------- | -------------- |
| nothing | list\<string\> |

## Examples

Get the last activated overlay

```bash
> module spam { export def foo [] { "foo" } }
    overlay use spam
    overlay list | last
```

## Notes

```text
The overlays are listed in the order they were activated.
```
