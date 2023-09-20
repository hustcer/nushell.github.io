# math stddev

**version**: 0.85.0

## **usage**:

Returns the standard deviation of a list of numbers, or of each column in a table.

## Signature

`> math stddev --sample`

## Parameters

- `--sample`: calculate sample standard deviation (i.e. using N-1 as the denominator)

## Input/output types:

| input          | output |
| -------------- | ------ |
| list\<number\> | number |

## Examples

Compute the standard deviation of a list of numbers

```bash
> [1 2 3 4 5] | math stddev
```

Compute the sample standard deviation of a list of numbers

```bash
> [1 2 3 4 5] | math stddev -s
```
