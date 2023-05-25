# items

**version**: 0.80.0

## **usage**:

Given a record, iterate on each pair of column name and associated value.

## Signature

`> items (closure)`

## Parameters

- `closure`: the closure to run

## Notes

```text
This is a the fusion of `columns`, `values` and `each`.
```

## Examples

Iterate over each key-value pair of a record

```bash
> { new: york, san: francisco } | items {|key, value| echo $'($key) ($value)' }
```
