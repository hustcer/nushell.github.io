# str trim

**version**: 0.80.0

## **usage**:

Trim whitespace or specific character.

## Signature

`> str trim ...rest --char --left --right`

## Parameters

- `...rest`: For a data structure input, trim strings at the given cell paths
- `--char {string}`: character to trim (default: whitespace)
- `--left`: trims characters only from the beginning of the string
- `--right`: trims characters only from the end of the string

## Examples

Trim whitespace

```bash
> 'Nu shell ' | str trim
```

Trim a specific character

```bash
> '=== Nu shell ===' | str trim -c '=' | str trim
```

Trim whitespace from the beginning of string

```bash
> ' Nu shell ' | str trim -l
```

Trim a specific character

```bash
> '=== Nu shell ===' | str trim -c '='
```

Trim whitespace from the end of string

```bash
> ' Nu shell ' | str trim -r
```

Trim a specific character

```bash
> '=== Nu shell ===' | str trim -r -c '='
```
