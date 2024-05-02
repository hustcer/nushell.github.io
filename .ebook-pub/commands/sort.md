# sort

**version**: 0.93.0

## **usage**:

Sort in increasing order.

## Signature

`> sort --reverse --ignore-case --values --natural`

## Parameters

- `--reverse`: Sort in reverse order
- `--ignore-case`: Sort string-based data case-insensitively
- `--values`: If input is a single record, sort the record by values; ignored if input is not a single record
- `--natural`: Sort alphanumeric string-based values naturally (1, 9, 10, 99, 100, ...)

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| record      | record      |

## Examples

sort the list by increasing value

```bash
> [2 0 1] | sort
```

sort the list by decreasing value

```bash
> [2 0 1] | sort --reverse
```

sort a list of strings

```bash
> [betty amy sarah] | sort
```

sort a list of strings in reverse

```bash
> [betty amy sarah] | sort --reverse
```

Sort strings (case-insensitive)

```bash
> [airplane Truck Car] | sort -i
```

Sort strings (reversed case-insensitive)

```bash
> [airplane Truck Car] | sort -i -r
```

Sort record by key (case-insensitive)

```bash
> {b: 3, a: 4} | sort
```

Sort record by value

```bash
> {b: 4, a: 3, c:1} | sort -v
```
