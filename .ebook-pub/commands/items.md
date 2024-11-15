# items

**version**: 0.100.1

## **usage**:

Given a record, iterate on each pair of column name and associated value.

## Signature

`> items (closure)`

## Parameters

- `closure`: The closure to run.

## Input/output types:

| input  | output |
| ------ | ------ |
| record | any    |

## Examples

Iterate over each key-value pair of a record

```bash
> { new: york, san: francisco } | items {|key, value| echo $'($key) ($value)' }
```

## Notes

```text
This is a the fusion of `columns`, `values` and `each`.
```
