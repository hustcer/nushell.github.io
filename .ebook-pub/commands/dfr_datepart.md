# dfr datepart

**version**: 0.85.0

## **usage**:

Creates an expression for capturing the specified datepart in a column.

## Signature

`> dfr datepart (Datepart name)`

## Parameters

- `Datepart name`: Part of the date to capture. Possible values are year, quarter, month, week, weekday, day, hour, minute, second, millisecond, microsecond, nanosecond

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Creates an expression to capture the year date part

```bash
> [["2021-12-30T01:02:03.123456789"]] | dfr into-df | dfr as-datetime "%Y-%m-%dT%H:%M:%S.%9f" | dfr with-column [(dfr col datetime | dfr datepart year | dfr as datetime_year )]
```

Creates an expression to capture multiple date parts

```bash
> [["2021-12-30T01:02:03.123456789"]] | dfr into-df | dfr as-datetime "%Y-%m-%dT%H:%M:%S.%9f" |
                dfr with-column [ (dfr col datetime | dfr datepart year | dfr as datetime_year ),
                (dfr col datetime | dfr datepart month | dfr as datetime_month ),
                (dfr col datetime | dfr datepart day | dfr as datetime_day ),
                (dfr col datetime | dfr datepart hour | dfr as datetime_hour ),
                (dfr col datetime | dfr datepart minute | dfr as datetime_minute ),
                (dfr col datetime | dfr datepart second | dfr as datetime_second ),
                (dfr col datetime | dfr datepart nanosecond | dfr as datetime_ns ) ]
```
