# seq date

**version**: 0.80.0

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

## Examples

print the next 10 days in YYYY-MM-DD format with newline separator

```bash
> seq date --days 10
```

print the previous 10 days in YYYY-MM-DD format with newline separator

```bash
> seq date --days 10 -r
```

print the previous 10 days starting today in MM/DD/YYYY format with newline separator

```bash
> seq date --days 10 -o '%m/%d/%Y' -r
```

print the first 10 days in January, 2020

```bash
> seq date -b '2020-01-01' -e '2020-01-10'
```

print every fifth day between January 1st 2020 and January 31st 2020

```bash
> seq date -b '2020-01-01' -e '2020-01-31' -n 5
```
