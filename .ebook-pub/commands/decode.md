# decode

**version**: 0.80.0

## **usage**:

Decode bytes into a string.

## Signature

`> decode (encoding)`

## Parameters

- `encoding`: the text encoding to use

## Notes

```text
Multiple encodings are supported; here are a few:
big5, euc-jp, euc-kr, gbk, iso-8859-1, utf-16, cp1252, latin5

For a more complete list of encodings please refer to the encoding_rs
documentation link at https://docs.rs/encoding_rs/latest/encoding_rs/#statics
```

## Examples

Decode the output of an external command

```bash
> ^cat myfile.q | decode utf-8
```

Decode an UTF-16 string into nushell UTF-8 string

```bash
> 0x[00 53 00 6F 00 6D 00 65 00 20 00 44 00 61 00 74 00 61] | decode utf-16be
```
