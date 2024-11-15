# histogram

**version**: 0.80.0

## **usage**:

Creates a new table with a histogram based on the column name passed in.

## Signature

`> histogram (column-name) (frequency-column-name) --percentage-type`

## Parameters

- `column-name`: column name to calc frequency, no need to provide if input is just a list
- `frequency-column-name`: histogram's frequency column, default to be frequency column output
- `--percentage-type {string}`: percentage calculate method, can be 'normalize' or 'relative', in 'normalize', defaults to be 'normalize'

## Examples

Compute a histogram of file types

```bash
> ls | histogram type
```

Compute a histogram for the types of files, with frequency column named freq

```bash
> ls | histogram type freq
```

Compute a histogram for a list of numbers

```bash
> [1 2 1] | histogram
```

Compute a histogram for a list of numbers, and percentage is based on the maximum value

```bash
> [1 2 3 1 1 1 2 2 1 1] | histogram --percentage-type relative
```
