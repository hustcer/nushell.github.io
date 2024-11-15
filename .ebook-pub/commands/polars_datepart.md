# polars datepart

**version**: 0.100.1

## **usage**:

Creates an expression for capturing the specified datepart in a column.

## Signature

`> polars datepart (Datepart name)`

## Parameters

- `Datepart name`: Part of the date to capture. Possible values are year, quarter, month, week, weekday, day, hour, minute, second, millisecond, microsecond, nanosecond

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates an expression to capture the year date part

```bash
> [["2021-12-30T01:02:03.123456789"]] | polars into-df | polars as-datetime "%Y-%m-%dT%H:%M:%S.%9f" | polars with-column [(polars col datetime | polars datepart year | polars as datetime_year )]
```

Creates an expression to capture multiple date parts

```bash
> [["2021-12-30T01:02:03.123456789"]] | polars into-df | polars as-datetime "%Y-%m-%dT%H:%M:%S.%9f" |
                polars with-column [ (polars col datetime | polars datepart year | polars as datetime_year ),
                (polars col datetime | polars datepart month | polars as datetime_month ),
                (polars col datetime | polars datepart day | polars as datetime_day ),
                (polars col datetime | polars datepart hour | polars as datetime_hour ),
                (polars col datetime | polars datepart minute | polars as datetime_minute ),
                (polars col datetime | polars datepart second | polars as datetime_second ),
                (polars col datetime | polars datepart nanosecond | polars as datetime_ns ) ]
```
