# fill

**version**: 0.100.1

## **usage**:

Fill and Align.

## Signature

`> fill --width --alignment --character`

## Parameters

- `--width {int}`: The width of the output. Defaults to 1
- `--alignment {string}`: The alignment of the output. Defaults to Left (Left(l), Right(r), Center(c/m), MiddleRight(cr/mr))
- `--character {string}`: The character to fill with. Defaults to ' ' (space)

## Input/output types:

| input            | output         |
| ---------------- | -------------- |
| filesize         | string         |
| float            | string         |
| int              | string         |
| list\<any\>      | list\<string\> |
| list\<filesize\> | list\<string\> |
| list\<float\>    | list\<string\> |
| list\<int\>      | list\<string\> |
| list\<string\>   | list\<string\> |
| string           | string         |

## Examples

Fill a string on the left side to a width of 15 with the character '─'

```bash
> 'nushell' | fill --alignment l --character '─' --width 15
```

Fill a string on the right side to a width of 15 with the character '─'

```bash
> 'nushell' | fill --alignment r --character '─' --width 15
```

Fill an empty string with 10 '─' characters

```bash
> '' | fill --character '─' --width 10
```

Fill a number on the left side to a width of 5 with the character '0'

```bash
> 1 | fill --alignment right --character '0' --width 5
```

Fill a number on both sides to a width of 5 with the character '0'

```bash
> 1.1 | fill --alignment center --character '0' --width 5
```

Fill a filesize on both sides to a width of 10 with the character '0'

```bash
> 1kib | fill --alignment middle --character '0' --width 10
```
