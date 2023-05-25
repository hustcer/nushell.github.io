# sort-by

**version**: 0.80.0

## **usage**:

Sort by the given columns, in increasing order.

## Signature

`> sort-by ...rest --reverse --ignore-case --natural`

## Parameters

- `...rest`: the column(s) to sort by
- `--reverse`: Sort in reverse order
- `--ignore-case`: Sort string-based columns case-insensitively
- `--natural`: Sort alphanumeric string-based columns naturally (1, 9, 10, 99, 100, ...)

## Examples

Sort files by modified date

```bash
> ls | sort-by modified
```

Sort files by name (case-insensitive)

```bash
> ls | sort-by name -i
```

Sort a table by a column (reversed order)

```bash
> [[fruit count]; [apple 9] [pear 3] [orange 7]] | sort-by fruit -r
```
