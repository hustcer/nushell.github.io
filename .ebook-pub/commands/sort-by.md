# sort-by

**version**: 0.100.1

## **usage**:

Sort by the given cell path or closure.

## Signature

`> sort-by ...rest --reverse --ignore-case --natural --custom`

## Parameters

- `...rest`: The cell path(s) or closure(s) to compare elements by.
- `--reverse`: Sort in reverse order
- `--ignore-case`: Sort string-based data case-insensitively
- `--natural`: Sort alphanumeric string-based data naturally (1, 9, 10, 99, 100, ...)
- `--custom`: Use closures to specify a custom sort order, rather than to compute a comparison key

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| record      | table       |
| table       | table       |

## Examples

Sort files by modified date

```bash
> ls | sort-by modified
```

Sort files by name (case-insensitive)

```bash
> ls | sort-by name --ignore-case
```

Sort a table by a column (reversed order)

```bash
> [[fruit count]; [apple 9] [pear 3] [orange 7]] | sort-by fruit --reverse
```

Sort by a nested value

```bash
> [[name info]; [Cairo {founded: 969}] [Kyoto {founded: 794}]] | sort-by info.founded
```

Sort by the last value in a list

```bash
> [[2 50] [10 1]] | sort-by { last }
```

Sort in a custom order

```bash
> [7 3 2 8 4] | sort-by -c {|a, b| $a < $b}
```
