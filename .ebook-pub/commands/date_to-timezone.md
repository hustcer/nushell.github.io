# date to-timezone

**version**: 0.90.2

## **usage**:

Convert a date to a given time zone.

## Signature

`> date to-timezone (time zone)`

## Parameters

- `time zone`: Time zone description.

## Input/output types:

| input    | output   |
| -------- | -------- |
| datetime | datetime |
| string   | datetime |

## Examples

Get the current date in UTC+05:00

```bash
> date now | date to-timezone '+0500'
```

Get the current local date

```bash
> date now | date to-timezone local
```

Get the current date in Hawaii

```bash
> date now | date to-timezone US/Hawaii
```

Get the current date in Hawaii

```bash
> "2020-10-10 10:00:00 +02:00" | date to-timezone "+0500"
```

Get the current date in Hawaii, from a datetime object

```bash
> "2020-10-10 10:00:00 +02:00" | into datetime | date to-timezone "+0500"
```

## Notes

```text
Use 'date list-timezone' to list all supported time zones.
```
