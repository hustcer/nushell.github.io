# into datetime

**version**: 0.85.0

## **usage**:

Convert text or timestamp into a datetime.

## Signature

`> into datetime ...rest --timezone --offset --format --list`

## Parameters

- `...rest`: for a data structure input, convert data at the given cell paths
- `--timezone {string}`: Specify timezone if the input is a Unix timestamp. Valid options: 'UTC' ('u') or 'LOCAL' ('l')
- `--offset {int}`: Specify timezone by offset from UTC if the input is a Unix timestamp, like '+8', '-4'
- `--format {string}`: Specify expected format of INPUT string to parse to datetime. Use --list to see options
- `--list`: Show all possible variables for use in --format flag

## Input/output types:

| input          | output           |
| -------------- | ---------------- |
| int            | datetime         |
| list\<string\> | list\<datetime\> |
| record         | record           |
| string         | datetime         |
| table          | table            |

## Examples

Convert any standard timestamp string to datetime

```bash
> '27.02.2021 1:55 pm +0000' | into datetime
```

Convert any standard timestamp string to datetime

```bash
> '2021-02-27T13:55:40.2246+00:00' | into datetime
```

Convert non-standard timestamp string to datetime using a custom format

```bash
> '20210227_135540+0000' | into datetime -f '%Y%m%d_%H%M%S%z'
```

Convert nanosecond-precision unix timestamp to a datetime with offset from UTC

```bash
> 1614434140123456789 | into datetime --offset -5
```

Convert standard (seconds) unix timestamp to a UTC datetime

```bash
> 1614434140 * 1_000_000_000 | into datetime
```

Convert list of timestamps to datetimes

```bash
> ["2023-03-30 10:10:07 -05:00", "2023-05-05 13:43:49 -05:00", "2023-06-05 01:37:42 -05:00"] | into datetime
```
