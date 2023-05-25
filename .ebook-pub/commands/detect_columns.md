# detect columns

**version**: 0.80.0

## **usage**:

Attempt to automatically split text into multiple columns.

## Signature

`> detect columns --skip --no-headers`

## Parameters

- `--skip {int}`: number of rows to skip before detecting
- `--no-headers`: don't detect headers

## Examples

Splits string across multiple columns

```bash
> 'a b c' | detect columns -n
```

Splits a multi-line string into columns with headers detected

```bash
> $'c1 c2 c3(char nl)a b c' | detect columns
```
