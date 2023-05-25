# split column

**version**: 0.80.0

## **usage**:

Split a string into multiple columns using a separator.

## Signature

`> split column (separator) ...rest --collapse-empty --regex`

## Parameters

- `separator`: the character or string that denotes what separates columns
- `...rest`: column names to give the new columns
- `--collapse-empty`: remove empty columns
- `--regex`: separator is a regular expression

## Examples

Split a string into columns by the specified separator

```bash
> 'a--b--c' | split column '--'
```

Split a string into columns of char and remove the empty columns

```bash
> 'abc' | split column -c ''
```

Split a list of strings into a table

```bash
> ['a-b' 'c-d'] | split column -
```

Split a list of strings into a table, ignoring padding

```bash
> ['a -  b' 'c  -    d'] | split column -r '\s*-\s*'
```
