# encode base64

**version**: 0.85.0

## **usage**:

Encode a string or binary value using Base64.

## Signature

`> encode base64 ...rest --character-set`

## Parameters

- `...rest`: For a data structure input, encode data at the given cell paths
- `--character-set {string}`: specify the character rules for encoding the input.
  Valid values are 'standard', 'standard-no-padding', 'url-safe', 'url-safe-no-padding','binhex', 'bcrypt', 'crypt', 'mutf7'

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| binary         | string         |
| list\<any\>    | list\<string\> |
| list\<binary\> | list\<string\> |
| list\<string\> | list\<string\> |
| record         | record         |
| string         | string         |
| table          | table          |

## Examples

Encode binary data

```bash
> 0x[09 F9 11 02 9D 74 E3 5B D8 41 56 C5 63 56 88 C0] | encode base64
```

Encode a string with default settings

```bash
> 'Some Data' | encode base64
```

Encode a string with the binhex character set

```bash
> 'Some Data' | encode base64 --character-set binhex
```
