# char

**version**: 0.85.0

## **usage**:

Output special characters (e.g., 'newline').

## Signature

`> char (character) ...rest --list --unicode --integer`

## Parameters

- `character`: the name of the character to output
- `...rest`: multiple Unicode bytes
- `--list`: List all supported character names
- `--unicode`: Unicode string i.e. 1f378
- `--integer`: Create a codepoint from an integer

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

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
> char -u 1f378
```

Create Unicode from integer codepoint values

```bash
> char -i (0x60 + 1) (0x60 + 2)
```

Output multi-byte Unicode character

```bash
> char -u 1F468 200D 1F466 200D 1F466
```
