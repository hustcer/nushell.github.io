# math variance

**version**: 0.90.2

## **usage**:

Returns the variance of a list of numbers or of each column in a table.

## Signature

`> math variance --sample`

## Parameters

- `--sample`: calculate sample variance (i.e. using N-1 as the denominator)

## Input/output types:

| input          | output |
| -------------- | ------ |
| list\<number\> | number |
| record         | record |
| table          | record |

## Examples

Get the variance of a list of numbers

```bash
> [1 2 3 4 5] | math variance
```

Get the sample variance of a list of numbers

```bash
> [1 2 3 4 5] | math variance --sample
```

Compute the variance of each column in a table

```bash
> [[a b]; [1 2] [3 4]] | math variance
```
