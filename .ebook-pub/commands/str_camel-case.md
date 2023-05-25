# str camel-case

**version**: 0.80.0

## **usage**:

Convert a string to camelCase.

## Signature

`> str camel-case ...rest`

## Parameters

- `...rest`: For a data structure input, convert strings at the given cell paths

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
