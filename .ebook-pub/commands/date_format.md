# date format

**version**: 0.80.0

## **usage**:

Format a given date using a format string.

## Signature

`> date format (format string) --list`

## Parameters

- `format string`: the desired date format
- `--list`: lists strftime cheatsheet

## Examples

Format a given date-time as a string using the default format (RFC 2822).

```bash
> "2021-10-22 20:00:12 +01:00" | date format
```

Format the current date-time using a given format string.

```bash
> date now | date format "%Y-%m-%d %H:%M:%S"
```

Format the current date using a given format string.

```bash
> date now | date format "%Y-%m-%d %H:%M:%S"
```

Format a given date using a given format string.

```bash
> "2021-10-22 20:00:12 +01:00" | date format "%Y-%m-%d"
```
