# to msgpackz

**version**: 0.100.1

## **usage**:

Convert Nu values into brotli-compressed MessagePack.

## Signature

`> to msgpackz --quality --window-size`

## Parameters

- `--quality {int}`: Quality of brotli compression (default 3)
- `--window-size {int}`: Window size for brotli compression (default 20)

## Input/output types:

| input | output |
| ----- | ------ |
| any   | binary |

## Notes

```text
This is the format used by the plugin registry file ($nu.plugin-path).
```
