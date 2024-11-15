# cal

**version**: 0.100.1

## **usage**:

Display a calendar.

## Signature

`> cal --year --quarter --month --as-table --full-year --week-start --month-names`

## Parameters

- `--year`: Display the year column
- `--quarter`: Display the quarter column
- `--month`: Display the month column
- `--as-table`: output as a table
- `--full-year {int}`: Display a year-long calendar for the specified year
- `--week-start {string}`: Display the calendar with the specified day as the first day of the week
- `--month-names`: Display the month names instead of integers

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | table  |

## Examples

This month's calendar

```bash
> cal
```

The calendar for all of 2012

```bash
> cal --full-year 2012
```

This month's calendar with the week starting on Monday

```bash
> cal --week-start mo
```

How many 'Friday the Thirteenths' occurred in 2015?

```bash
> cal --as-table --full-year 2015 | where fr == 13 | length
```
