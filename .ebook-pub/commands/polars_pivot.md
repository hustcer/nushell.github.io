# polars pivot

**version**: 0.100.1

## **usage**:

Pivot a DataFrame from wide to long format.

## Signature

`> polars pivot --on --index --values --aggregate --sort --streamable`

## Parameters

- `--on {list<string>}`: column names for pivoting
- `--index {list<string>}`: column names for indexes
- `--values {list<string>}`: column names used as value columns
- `--aggregate {string}`: Aggregation to apply when pivoting. The following are supported: first, sum, min, max, mean, median, count, last
- `--sort`: Sort columns
- `--streamable`: Whether or not to use the polars streaming engine. Only valid for lazy dataframes

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Perform a pivot in order to show individuals test score by subject

```bash
> [[name subject test_1 test_2]; [Cady maths 98 100] [Cady physics 99 100] [Karen maths 61 60] [Karen physics 58 60]] | polars into-df |  polars pivot --on [subject] --index [name] --values [test_1]
```
