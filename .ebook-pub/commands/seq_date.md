# seq date

**version**: 0.93.0

## **usage**:

Print sequences of dates.

## Signature

`> seq date --output-format --input-format --begin-date --end-date --increment --days --reverse`

## Parameters

- `--output-format {string}`: prints dates in this format (defaults to %Y-%m-%d)
- `--input-format {string}`: give argument dates in this format (defaults to %Y-%m-%d)
- `--begin-date {string}`: beginning date range
- `--end-date {string}`: ending date
- `--increment {int}`: increment dates by this number
- `--days {int}`: number of days to print
- `--reverse`: print dates in reverse

## Input/output types:

| input   | output         |
| ------- | -------------- |
| nothing | list\<string\> |

## Examples

Return a list of the next 10 days in the YYYY-MM-DD format

```bash
> seq date --days 10
```

Return the previous 10 days in the YYYY-MM-DD format

```bash
> seq date --days 10 --reverse
```

Return the previous 10 days, starting today, in the MM/DD/YYYY format

```bash
> seq date --days 10 -o '%m/%d/%Y' --reverse
```

Return the first 10 days in January, 2020

```bash
> seq date --begin-date '2020-01-01' --end-date '2020-01-10'
```

print every fifth day between January 1st 2020 and January 31st 2020

```bash
> seq date --begin-date '2020-01-01' --end-date '2020-01-31' --increment 5
```
