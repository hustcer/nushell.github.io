# split words

**version**: 0.90.2

## **usage**:

Split a string's words into separate rows.

## Signature

`> split words --min-word-length --grapheme-clusters --utf-8-bytes`

## Parameters

- `--min-word-length {int}`: The minimum word length
- `--grapheme-clusters`: measure word length in grapheme clusters (requires -l)
- `--utf-8-bytes`: measure word length in UTF-8 bytes (default; requires -l; non-ASCII chars are length 2+)

## Input/output types:

| input          | output                 |
| -------------- | ---------------------- |
| list\<string\> | list\<list\<string\>\> |
| string         | list\<string\>         |

## Examples

Split the string's words into separate rows

```bash
> 'hello world' | split words
```

Split the string's words, of at least 3 characters, into separate rows

```bash
> 'hello to the world' | split words --min-word-length 3
```

A real-world example of splitting words

```bash
> http get https://www.gutenberg.org/files/11/11-0.txt | str downcase | split words --min-word-length 2 | uniq --count | sort-by count --reverse | first 10
```
