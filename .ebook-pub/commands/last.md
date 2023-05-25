# last

**version**: 0.80.0

## **usage**:

Return only the last several rows of the input. Counterpart of `first`. Opposite of `drop`.

## Signature

`> last (rows)`

## Parameters

- `rows`: starting from the back, the number of rows to return

## Examples

Get the last 2 items

```bash
> [1,2,3] | last 2
```

Get the last item

```bash
> [1,2,3] | last
```
