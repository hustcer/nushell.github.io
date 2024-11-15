# str substring

**version**: 0.100.1

## **usage**:

Get part of a string. Note that the first character of a string is index 0.

## Signature

`> str substring (range) ...rest --grapheme-clusters --utf-8-bytes`

## Parameters

- `range`: The indexes to substring [start end].
- `...rest`: For a data structure input, turn strings at the given cell paths into substrings.
- `--grapheme-clusters`: count indexes and split using grapheme clusters (all visible chars have length 1)
- `--utf-8-bytes`: count indexes and split using UTF-8 bytes (default; non-ASCII chars have length 2+)

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| record         | record         |
| string         | string         |
| table          | table          |

## Examples

Get a substring "nushell" from the text "good nushell" using a range

```bash
>  'good nushell' | str substring 5..11
```

Count indexes and split using grapheme clusters

```bash
>  '🇯🇵ほげ ふが ぴよ' | str substring --grapheme-clusters 4..5
```

sub string by negative index

```bash
>  'good nushell' | str substring 5..-2
```
