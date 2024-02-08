# dfr rename

**version**: 0.90.2

## **usage**:

Rename a dataframe column.

## Signature

`> dfr rename (columns) (new names)`

## Parameters

- `columns`: Column(s) to be renamed. A string or list of strings
- `new names`: New names for the selected column(s). A string or list of strings

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Renames a series

```bash
> [5 6 7 8] | dfr into-df | dfr rename '0' new_name
```

Renames a dataframe column

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr rename a a_new
```

Renames two dataframe columns

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr rename [a b] [a_new b_new]
```
