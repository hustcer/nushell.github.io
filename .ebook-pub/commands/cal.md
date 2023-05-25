# cal

**version**: 0.80.0

## **usage**:

Display a calendar.

## Signature

`> cal --year --quarter --month --full-year --week-start --month-names`

## Parameters

- `--year`: Display the year column
- `--quarter`: Display the quarter column
- `--month`: Display the month column
- `--full-year {int}`: Display a year-long calendar for the specified year
- `--week-start {string}`: Display the calendar with the specified day as the first day of the week
- `--month-names`: Display the month names instead of integers

## Examples

This month's calendar

```bash
> cal
```

The calendar for all of 2012

```bash
> cal --full-year 2012
```

This month's calendar with the week starting on monday

```bash
> cal --week-start monday
```
