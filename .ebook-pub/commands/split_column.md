# split column

**version**: 0.100.1

## **usage**:

Split a string into multiple columns using a separator.

## Signature

`> split column (separator) ...rest --collapse-empty --number --regex`

## Parameters

- `separator`: The character or string that denotes what separates columns.
- `...rest`: Column names to give the new columns.
- `--collapse-empty`: remove empty columns
- `--number {int}`: Split into maximum number of items
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

Split into columns, last column may contain the delimiter

```bash
> ['author: Salina Yoon' r#'title: Where's Ellie?: A Hide-and-Seek Book'#] | split column --number 2 ': ' key value
```
