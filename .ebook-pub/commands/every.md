# every

**version**: 0.93.0

## **usage**:

Show (or skip) every n-th row, starting from the first one.

## Signature

`> every (stride) --skip`

## Parameters

- `stride`: How many rows to skip between (and including) each row returned.
- `--skip`: skip the rows that would be returned, instead of selecting them

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |

## Examples

Get every second row

```bash
> [1 2 3 4 5] | every 2
```

Skip every second row

```bash
> [1 2 3 4 5] | every 2 --skip
```
