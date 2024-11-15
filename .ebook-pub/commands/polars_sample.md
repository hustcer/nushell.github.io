# polars sample

**version**: 0.100.1

## **usage**:

Create sample dataframe.

## Signature

`> polars sample --n-rows --fraction --seed --replace --shuffle`

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
> [[a b]; [1 2] [3 4]] | polars into-df | polars sample --n-rows 1
```

Shows sample row using fraction and replace

```bash
> [[a b]; [1 2] [3 4] [5 6]] | polars into-df | polars sample --fraction 0.5 --replace
```

Shows sample row using using predefined seed 1

```bash
> [[a b]; [1 2] [3 4] [5 6]] | polars into-df | polars sample --seed 1 --n-rows 1
```
