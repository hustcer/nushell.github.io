# str kebab-case

**version**: 0.93.0

## **usage**:

Convert a string to kebab-case.

## Signature

`> str kebab-case ...rest`

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

convert a string to kebab-case

```bash
> 'NuShell' | str kebab-case
```

convert a string to kebab-case

```bash
> 'thisIsTheFirstCase' | str kebab-case
```

convert a string to kebab-case

```bash
> 'THIS_IS_THE_SECOND_CASE' | str kebab-case
```

convert a column from a table to kebab-case

```bash
> [[lang, gems]; [nuTest, 100]] | str kebab-case lang
```
