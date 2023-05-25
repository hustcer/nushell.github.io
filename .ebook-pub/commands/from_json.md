# from json

**version**: 0.80.0

## **usage**:

Convert from json to structured data.

## Signature

`> from json --objects`

## Parameters

- `--objects`: treat each line as a separate value

## Examples

Converts json formatted string to table

```bash
> '{ "a": 1 }' | from json
```

Converts json formatted string to table

```bash
> '{ "a": 1, "b": [1, 2] }' | from json
```
