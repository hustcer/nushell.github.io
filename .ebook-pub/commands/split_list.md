# split list

**version**: 0.85.0

## **usage**:

Split a list into multiple lists using a separator.

## Signature

`> split list (separator) --regex`

## Parameters

- `separator`: the value that denotes what separates the list
- `--regex`: separator is a regular expression, matching values that can be coerced into a string

## Input/output types:

| input       | output              |
| ----------- | ------------------- |
| list\<any\> | list\<list\<any\>\> |

## Examples

Split a list of chars into two lists

```bash
> [a, b, c, d, e, f, g] | split list d
```

Split a list of lists into two lists of lists

```bash
> [[1,2], [2,3], [3,4]] | split list [2,3]
```

Split a list of chars into two lists

```bash
> [a, b, c, d, a, e, f, g] | split list a
```

Split a list of chars into lists based on multiple characters

```bash
> [a, b, c, d, a, e, f, g] | split list -r '(b|e)'
```
