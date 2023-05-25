# str snake-case

**version**: 0.80.0

## **usage**:

Convert a string to snake_case.

## Signature

`> str snake-case ...rest`

## Parameters

- `...rest`: For a data structure input, convert strings at the given cell paths

## Examples

convert a string to snake_case

```bash
>  "NuShell" | str snake-case
```

convert a string to snake_case

```bash
>  "this_is_the_second_case" | str snake-case
```

convert a string to snake_case

```bash
> "this-is-the-first-case" | str snake-case
```

convert a column from a table to snake_case

```bash
> [[lang, gems]; [nuTest, 100]] | str snake-case lang
```
