# headers

**version**: 0.80.0

## **usage**:

Use the first row of the table as column names.

## Signature

`> headers `

## Examples

Sets the column names for a table created by `split column`

```bash
> "a b c|1 2 3" | split row "|" | split column " " | headers
```

Columns which don't have data in their first row are removed

```bash
> "a b c|1 2 3|1 2 3 4" | split row "|" | split column " " | headers
```
