# decode base64

**version**: 0.90.2

## **usage**:

Base64 decode a value.

## Signature

`> decode base64 ...rest --character-set --binary`

## Parameters

- `...rest`: For a data structure input, decode data at the given cell paths.
- `--character-set {string}`: specify the character rules for encoding the input.
  Valid values are 'standard', 'standard-no-padding', 'url-safe', 'url-safe-no-padding','binhex', 'bcrypt', 'crypt', 'mutf7'
- `--binary`: Output a binary value instead of decoding payload as UTF-8

## Input/output types:

| input          | output      |
| -------------- | ----------- |
| list\<string\> | list\<any\> |
| record         | record      |
| string         | any         |
| table          | table       |

## Examples

Base64 decode a value and output as UTF-8 string

```bash
> 'U29tZSBEYXRh' | decode base64
```

Base64 decode a value and output as binary

```bash
> 'U29tZSBEYXRh' | decode base64 --binary
```

## Notes

```text
Will attempt to decode binary payload as an UTF-8 string by default. Use the `--binary(-b)` argument to force binary output.
```
