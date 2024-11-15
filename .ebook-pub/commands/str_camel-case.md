# str camel-case

**version**: 0.100.1

## **usage**:

Convert a string to camelCase.

## Signature

`> str camel-case ...rest`

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

convert a string to camelCase

```bash
>  'NuShell' | str camel-case
```

convert a string to camelCase

```bash
> 'this-is-the-first-case' | str camel-case
```

convert a string to camelCase

```bash
>  'this_is_the_second_case' | str camel-case
```

convert a column from a table to camelCase

```bash
> [[lang, gems]; [nu_test, 100]] | str camel-case lang
```
