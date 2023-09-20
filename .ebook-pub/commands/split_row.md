# split row

**version**: 0.85.0

## **usage**:

Split a string into multiple rows using a separator.

## Signature

`> split row (separator) --number --regex`

## Parameters

- `separator`: a character or regex that denotes what separates rows
- `--number {int}`: Split into maximum number of items
- `--regex`: use regex syntax for separator

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| string         | list\<string\> |

## Examples

Split a string into rows of char

```bash
> 'abc' | split row ''
```

Split a string into rows by the specified separator

```bash
> 'a--b--c' | split row '--'
```

Split a string by '-'

```bash
> '-a-b-c-' | split row '-'
```

Split a string by regex

```bash
> 'a   b       c' | split row -r '\s+'
```
