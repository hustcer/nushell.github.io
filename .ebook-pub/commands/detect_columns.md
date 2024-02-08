# detect columns

**version**: 0.90.2

## **usage**:

Attempt to automatically split text into multiple columns.

## Signature

`> detect columns --skip --no-headers --combine-columns`

## Parameters

- `--skip {int}`: number of rows to skip before detecting
- `--no-headers`: don't detect headers
- `--combine-columns {range}`: columns to be combined; listed as a range

## Input/output types:

| input  | output |
| ------ | ------ |
| string | table  |

## Examples

Splits string across multiple columns

```bash
> 'a b c' | detect columns --no-headers
```

```bash
> $'c1 c2 c3 c4 c5(char nl)a b c d e' | detect columns --combine-columns 0..1
```

Splits a multi-line string into columns with headers detected

```bash
> $'c1 c2 c3 c4 c5(char nl)a b c d e' | detect columns --combine-columns -2..-1
```

Splits a multi-line string into columns with headers detected

```bash
> $'c1 c2 c3 c4 c5(char nl)a b c d e' | detect columns --combine-columns 2..
```

Parse external ls command and combine columns for datetime

```bash
> ^ls -lh | detect columns --no-headers --skip 1 --combine-columns 5..7
```
