# split column

**version**: 0.90.2

## **usage**:

Split a string into multiple columns using a separator.

## Signature

`> split column (separator) ...rest --collapse-empty --regex`

## Parameters

- `separator`: The character or string that denotes what separates columns.
- `...rest`: Column names to give the new columns.
- `--collapse-empty`: remove empty columns
- `--regex`: separator is a regular expression

## Input/output types:

| input          | output |
| -------------- | ------ |
| list\<string\> | table  |
| string         | table  |

## Examples

Split a string into columns by the specified separator

```bash
> 'a--b--c' | split column '--'
```

Split a string into columns of char and remove the empty columns

```bash
> 'abc' | split column --collapse-empty ''
```

Split a list of strings into a table

```bash
> ['a-b' 'c-d'] | split column -
```

Split a list of strings into a table, ignoring padding

```bash
> ['a -  b' 'c  -    d'] | split column --regex '\s*-\s*'
```
