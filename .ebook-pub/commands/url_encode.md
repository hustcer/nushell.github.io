# url encode

**version**: 0.85.0

## **usage**:

Converts a string to a percent encoded web safe string.

## Signature

`> url encode ...rest --all`

## Parameters

- `...rest`: For a data structure input, check strings at the given cell paths, and replace with result
- `--all`: encode all non-alphanumeric chars including `/`, `.`, `:`

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| record         | record         |
| string         | string         |
| table          | table          |

## Examples

Encode a url with escape characters

```bash
> 'https://example.com/foo bar' | url encode
```

Encode multiple urls with escape characters in list

```bash
> ['https://example.com/foo bar' 'https://example.com/a>b' '中文字/eng/12 34'] | url encode
```

Encode all non alphanumeric chars with all flag

```bash
> 'https://example.com/foo bar' | url encode --all
```
