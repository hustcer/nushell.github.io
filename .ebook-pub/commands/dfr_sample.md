# dfr sample

**version**: 0.90.2

## **usage**:

Create sample dataframe.

## Signature

`> dfr sample --n-rows --fraction --seed --replace --shuffle`

## Parameters

- `--n-rows {int}`: number of rows to be taken from dataframe
- `--fraction {number}`: fraction of dataframe to be taken
- `--seed {number}`: seed for the selection
- `--replace`: sample with replace
- `--shuffle`: shuffle sample

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Sample rows from dataframe

```bash
> [[a b]; [1 2] [3 4]] | dfr into-df | dfr sample --n-rows 1
```

Shows sample row using fraction and replace

```bash
> [[a b]; [1 2] [3 4] [5 6]] | dfr into-df | dfr sample --fraction 0.5 --replace
```
