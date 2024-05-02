# str index-of

**version**: 0.93.0

## **usage**:

Returns start index of first occurrence of string in input, or -1 if no match.

## Signature

`> str index-of (string) ...rest --grapheme-clusters --utf-8-bytes --range --end`

## Parameters

- `string`: The string to find in the input.
- `...rest`: For a data structure input, search strings at the given cell paths, and replace with result.
- `--grapheme-clusters`: count indexes using grapheme clusters (all visible chars have length 1)
- `--utf-8-bytes`: count indexes using UTF-8 bytes (default; non-ASCII chars have length 2+)
- `--range {range}`: optional start and/or end index
- `--end`: search from the end of the input

## Input/output types:

| input          | output      |
| -------------- | ----------- |
| list\<string\> | list\<int\> |
| record         | record      |
| string         | int         |
| table          | table       |

## Examples

Returns index of string in input

```bash
>  'my_library.rb' | str index-of '.rb'
```

Count length using grapheme clusters

```bash
> '🇯🇵ほげ ふが ぴよ' | str index-of --grapheme-clusters 'ふが'
```

Returns index of string in input within a`rhs open range`

```bash
>  '.rb.rb' | str index-of '.rb' --range 1..
```

Returns index of string in input within a lhs open range

```bash
>  '123456' | str index-of '6' --range ..4
```

Returns index of string in input within a range

```bash
>  '123456' | str index-of '3' --range 1..4
```

Returns index of string in input

```bash
>  '/this/is/some/path/file.txt' | str index-of '/' -e
```
