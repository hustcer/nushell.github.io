# str screaming-snake-case

**version**: 0.90.2

## **usage**:

Convert a string to SCREAMING_SNAKE_CASE.

## Signature

`> str screaming-snake-case ...rest`

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

convert a string to SCREAMING_SNAKE_CASE

```bash
>  "NuShell" | str screaming-snake-case
```

convert a string to SCREAMING_SNAKE_CASE

```bash
>  "this_is_the_second_case" | str screaming-snake-case
```

convert a string to SCREAMING_SNAKE_CASE

```bash
> "this-is-the-first-case" | str screaming-snake-case
```

convert a column from a table to SCREAMING_SNAKE_CASE

```bash
> [[lang, gems]; [nu_test, 100]] | str screaming-snake-case lang
```
