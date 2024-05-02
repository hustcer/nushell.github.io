# merge

**version**: 0.93.0

## **usage**:

Merge the input with a record or table, overwriting values in matching columns.

## Signature

`> merge (value)`

## Parameters

- `value`: The new value to merge with.

## Input/output types:

| input  | output |
| ------ | ------ |
| record | record |
| table  | table  |

## Examples

Add an 'index' column to the input table

```bash
> [a b c] | wrap name | merge ( [1 2 3] | wrap index )
```

Merge two records

```bash
> {a: 1, b: 2} | merge {c: 3}
```

Merge two tables, overwriting overlapping columns

```bash
> [{columnA: A0 columnB: B0}] | merge [{columnA: 'A0*'}]
```

## Notes

```text
You may provide a column structure to merge

When merging tables, row 0 of the input table is overwritten
with values from row 0 of the provided table, then
repeating this process with row 1, and so on.
```
