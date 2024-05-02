# str trim

**version**: 0.93.0

## **usage**:

Trim whitespace or specific character.

## Signature

`> str trim ...rest --char --left --right`

## Parameters

- `...rest`: For a data structure input, trim strings at the given cell paths.
- `--char {string}`: character to trim (default: whitespace)
- `--left`: trims characters only from the beginning of the string
- `--right`: trims characters only from the end of the string

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| record         | record         |
| string         | string         |
| table          | table          |

## Examples

Trim whitespace

```bash
> 'Nu shell ' | str trim
```

Trim a specific character (not the whitespace)

```bash
> '=== Nu shell ===' | str trim --char '='
```

Trim whitespace from the beginning of string

```bash
> ' Nu shell ' | str trim --left
```

Trim whitespace from the end of string

```bash
> ' Nu shell ' | str trim --right
```

Trim a specific character only from the end of the string

```bash
> '=== Nu shell ===' | str trim --right --char '='
```
