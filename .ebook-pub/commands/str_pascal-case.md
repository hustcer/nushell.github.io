# str pascal-case

**version**: 0.90.2

## **usage**:

Convert a string to PascalCase.

## Signature

`> str pascal-case ...rest`

## Parameters

- `...rest`: For a data structure input, convert strings at the given cell paths

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| record         | record         |
| string         | string         |
| table          | table          |

## Examples

convert a string to PascalCase

```bash
> 'nu-shell' | str pascal-case
```

convert a string to PascalCase

```bash
> 'this-is-the-first-case' | str pascal-case
```

convert a string to PascalCase

```bash
> 'this_is_the_second_case' | str pascal-case
```

convert a column from a table to PascalCase

```bash
> [[lang, gems]; [nu_test, 100]] | str pascal-case lang
```
