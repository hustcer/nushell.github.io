# encode

**version**: 0.80.0

## **usage**:

Encode a string into bytes.

## Signature

`> encode (encoding) --ignore-errors`

## Parameters

- `encoding`: the text encoding to use
- `--ignore-errors`: when a character isn't in the given encoding, replace with a HTML entity (like `&#127880;`)

## Notes

```text
Multiple encodings are supported; here are a few:
big5, euc-jp, euc-kr, gbk, iso-8859-1, cp1252, latin5

Note that since the Encoding Standard doesn't specify encoders for utf-16le and utf-16be, these are not yet supported.

For a more complete list of encodings, please refer to the encoding_rs
documentation link at https://docs.rs/encoding_rs/latest/encoding_rs/#statics
```

## Examples

Encode an UTF-8 string into Shift-JIS

```bash
> "負けると知って戦うのが、遥かに美しいのだ" | encode shift-jis
```

Replace characters with HTML entities if they can't be encoded

```bash
> "🎈" | encode -i shift-jis
```
