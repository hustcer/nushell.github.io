# str title-case

**version**: 0.93.0

## **usage**:

Convert a string to Title Case.

## Signature

`> str title-case ...rest`

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

convert a string to Title Case

```bash
> 'nu-shell' | str title-case
```

convert a string to Title Case

```bash
> 'this is a test case' | str title-case
```

convert a column from a table to Title Case

```bash
> [[title, count]; ['nu test', 100]] | str title-case title
```
