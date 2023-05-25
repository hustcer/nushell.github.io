# overlay list

**version**: 0.80.0

## **usage**:

List all active overlays.

## Signature

`> overlay list `

## Notes

```text
The overlays are listed in the order they were activated.
```

## Examples

Get the last activated overlay

```bash
> module spam { export def foo [] { "foo" } }
    overlay use spam
    overlay list | last
```
