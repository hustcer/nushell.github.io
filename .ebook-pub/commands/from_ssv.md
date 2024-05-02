# from ssv

**version**: 0.93.0

## **usage**:

Parse text as space-separated values and create a table. The default minimum number of spaces counted as a separator is 2.

## Signature

`> from ssv --noheaders --aligned-columns --minimum-spaces`

## Parameters

- `--noheaders`: don't treat the first row as column names
- `--aligned-columns`: assume columns are aligned
- `--minimum-spaces {int}`: the minimum spaces to separate columns

## Input/output types:

| input  | output |
| ------ | ------ |
| string | table  |

## Examples

Converts ssv formatted string to table

```bash
> 'FOO   BAR
1   2' | from ssv
```

Converts ssv formatted string to table but not treating the first row as column names

```bash
> 'FOO   BAR
1   2' | from ssv --noheaders
```
