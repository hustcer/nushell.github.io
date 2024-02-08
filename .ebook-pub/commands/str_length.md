# str length

**version**: 0.90.2

## **usage**:

Output the length of any strings in the pipeline.

## Signature

`> str length ...rest --grapheme-clusters --utf-8-bytes`

## Parameters

- `...rest`: For a data structure input, replace strings at the given cell paths with their length.
- `--grapheme-clusters`: count length using grapheme clusters (all visible chars have length 1)
- `--utf-8-bytes`: count length using UTF-8 bytes (default; all non-ASCII chars have length 2+)

## Input/output types:

| input          | output      |
| -------------- | ----------- |
| list\<string\> | list\<int\> |
| record         | record      |
| string         | int         |
| table          | table       |

## Examples

Return the lengths of a string

```bash
> 'hello' | str length
```

Count length using grapheme clusters

```bash
> '🇯🇵ほげ ふが ぴよ' | str length  --grapheme-clusters
```

Return the lengths of multiple strings

```bash
> ['hi' 'there'] | str length
```
