# char

**version**: 0.90.2

## **usage**:

Output special characters (e.g., 'newline').

## Signature

`> char (character) ...rest --list --unicode --integer`

## Parameters

- `character`: The name of the character to output.
- `...rest`: Multiple Unicode bytes.
- `--list`: List all supported character names
- `--unicode`: Unicode string i.e. 1f378
- `--integer`: Create a codepoint from an integer

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |

## Examples

Output newline

```bash
> char newline
```

List available characters

```bash
> char --list
```

Output prompt character, newline and a hamburger menu character

```bash
> (char prompt) + (char newline) + (char hamburger)
```

Output Unicode character

```bash
> char --unicode 1f378
```

Create Unicode from integer codepoint values

```bash
> char --integer (0x60 + 1) (0x60 + 2)
```

Output multi-byte Unicode character

```bash
> char --unicode 1F468 200D 1F466 200D 1F466
```
