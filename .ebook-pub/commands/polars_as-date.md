# polars as-date

**version**: 0.100.1

## **usage**:

Converts string to date.

## Signature

`> polars as-date (format) --not-exact`

## Parameters

- `format`: formatting date string
- `--not-exact`: the format string may be contained in the date (e.g. foo-2021-01-01-bar could match 2021-01-01)

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Converts string to date

```bash
> ["2021-12-30" "2021-12-31"] | polars into-df | polars as-date "%Y-%m-%d"
```

Converts string to date

```bash
> ["2021-12-30" "2021-12-31 21:00:00"] | polars into-df | polars as-date "%Y-%m-%d" --not-exact
```

## Notes

```text
Format example:
        "%Y-%m-%d"    => 2021-12-31
        "%d-%m-%Y"    => 31-12-2021
        "%Y%m%d"      => 2021319 (2021-03-19)
```
