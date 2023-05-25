# str starts-with

**version**: 0.80.0

## **usage**:

Check if an input starts with a string.

## Signature

`> str starts-with (string) ...rest --ignore-case`

## Parameters

- `string`: the string to match
- `...rest`: For a data structure input, check strings at the given cell paths, and replace with result
- `--ignore-case`: search is case insensitive

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
> 'Cargo.toml' | str starts-with -i 'cargo'
```
