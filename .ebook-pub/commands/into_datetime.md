# into datetime

**version**: 0.100.1

## **usage**:

Convert text or timestamp into a datetime.

## Signature

`> into datetime ...rest --timezone --offset --format --list --list-human`

## Parameters

- `...rest`: For a data structure input, convert data at the given cell paths.
- `--timezone {string}`: Specify timezone if the input is a Unix timestamp. Valid options: 'UTC' ('u') or 'LOCAL' ('l')
- `--offset {int}`: Specify timezone by offset from UTC if the input is a Unix timestamp, like '+8', '-4'
- `--format {string}`: Specify expected format of INPUT string to parse to datetime. Use --list to see options
- `--list`: Show all possible variables for use in --format flag
- `--list-human`: Show human-readable datetime parsing examples

## Input/output types:

| input          | output           |
| -------------- | ---------------- |
| int            | datetime         |
| list\<string\> | list\<datetime\> |
| record         | record           |
| string         | datetime         |
| table          | table            |

## Examples

Convert timestamp string to datetime with timezone offset

```bash
> '27.02.2021 1:55 pm +0000' | into datetime
```

Convert standard timestamp string to datetime with timezone offset

```bash
> '2021-02-27T13:55:40.2246+00:00' | into datetime
```

Convert non-standard timestamp string, with timezone offset, to datetime using a custom format

```bash
> '20210227_135540+0000' | into datetime --format '%Y%m%d_%H%M%S%z'
```

Convert non-standard timestamp string, without timezone offset, to datetime with custom formatting

```bash
> '16.11.1984 8:00 am' | into datetime --format '%d.%m.%Y %H:%M %P'
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

Parsing human readable datetimes

```bash
> 'Today at 18:30' | into datetime
```

Parsing human readable datetimes

```bash
> 'Last Friday at 19:45' | into datetime
```

Parsing human readable datetimes

```bash
> 'In 5 minutes and 30 seconds' | into datetime
```
