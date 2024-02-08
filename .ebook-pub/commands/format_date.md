# format date

**version**: 0.90.2

## **usage**:

Format a given date using a format string.

## Signature

`> format date (format string) --list`

## Parameters

- `format string`: The desired format date.
- `--list`: lists strftime cheatsheet

## Input/output types:

| input    | output |
| -------- | ------ |
| datetime | string |
| nothing  | table  |
| string   | string |

## Examples

Format a given date-time using the default format (RFC 2822).

```bash
> '2021-10-22 20:00:12 +01:00' | into datetime | format date
```

Format a given date-time as a string using the default format (RFC 2822).

```bash
> "2021-10-22 20:00:12 +01:00" | format date
```

Format the current date-time using a given format string.

```bash
> date now | format date "%Y-%m-%d %H:%M:%S"
```

Format the current date using a given format string.

```bash
> date now | format date "%Y-%m-%d %H:%M:%S"
```

Format a given date using a given format string.

```bash
> "2021-10-22 20:00:12 +01:00" | format date "%Y-%m-%d"
```
