# dfr as-datetime

**version**: 0.85.0

## **usage**:

Converts string to datetime.

## Signature

`> dfr as-datetime (format) --not-exact`

## Parameters

- `format`: formatting date time string
- `--not-exact`: the format string may be contained in the date (e.g. foo-2021-01-01-bar could match 2021-01-01)

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Converts string to datetime

```bash
> ["2021-12-30 00:00:00" "2021-12-31 00:00:00"] | dfr into-df | dfr as-datetime "%Y-%m-%d %H:%M:%S"
```

Converts string to datetime with high resolutions

```bash
> ["2021-12-30 00:00:00.123456789" "2021-12-31 00:00:00.123456789"] | dfr into-df | dfr as-datetime "%Y-%m-%d %H:%M:%S.%9f"
```

## Notes

```text
Format example:
        "%y/%m/%d %H:%M:%S"  => 21/12/31 12:54:98
        "%y-%m-%d %H:%M:%S"  => 2021-12-31 24:58:01
        "%y/%m/%d %H:%M:%S"  => 21/12/31 24:58:01
        "%y%m%d %H:%M:%S"    => 210319 23:58:50
        "%Y/%m/%d %H:%M:%S"  => 2021/12/31 12:54:98
        "%Y-%m-%d %H:%M:%S"  => 2021-12-31 24:58:01
        "%Y/%m/%d %H:%M:%S"  => 2021/12/31 24:58:01
        "%Y%m%d %H:%M:%S"    => 20210319 23:58:50
        "%FT%H:%M:%S"        => 2019-04-18T02:45:55
        "%FT%H:%M:%S.%6f"    => microseconds
        "%FT%H:%M:%S.%9f"    => nanoseconds
```
