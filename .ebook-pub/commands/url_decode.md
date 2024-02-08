# url decode

**version**: 0.90.2

## **usage**:

Converts a percent-encoded web safe string to a string.

## Signature

`> url decode ...rest`

## Parameters

- `...rest`: For a data structure input, url decode strings at the given cell paths.

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<string\> | list\<string\> |
| record         | record         |
| string         | string         |
| table          | table          |

## Examples

Decode a url with escape characters

```bash
> 'https://example.com/foo%20bar' | url decode
```

Decode multiple urls with escape characters in list

```bash
> ['https://example.com/foo%20bar' 'https://example.com/a%3Eb' '%E4%B8%AD%E6%96%87%E5%AD%97/eng/12%2034'] | url decode
```
