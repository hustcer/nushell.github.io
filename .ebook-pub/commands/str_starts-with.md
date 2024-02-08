# str starts-with

**version**: 0.90.2

## **usage**:

Check if an input starts with a string.

## Signature

`> str starts-with (string) ...rest --ignore-case`

## Parameters

- `string`: The string to match.
- `...rest`: For a data structure input, check strings at the given cell paths, and replace with result.
- `--ignore-case`: search is case insensitive

## Input/output types:

| input          | output       |
| -------------- | ------------ |
| list\<string\> | list\<bool\> |
| record         | record       |
| string         | bool         |
| table          | table        |

## Examples

Checks if input string starts with 'my'

```bash
> 'my_library.rb' | str starts-with 'my'
```

Checks if input string starts with 'Car'

```bash
> 'Cargo.toml' | str starts-with 'Car'
```

Checks if input string starts with '.toml'

```bash
> 'Cargo.toml' | str starts-with '.toml'
```

Checks if input string starts with 'cargo', case-insensitive

```bash
> 'Cargo.toml' | str starts-with --ignore-case 'cargo'
```
