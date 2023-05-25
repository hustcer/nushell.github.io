# date now

**version**: 0.80.0

## **usage**:

Get the current date.

## Signature

`> date now `

## Examples

Get the current date and display it in a given format string.

```bash
> date now | date format "%Y-%m-%d %H:%M:%S"
```

Get the time duration from 2019-04-30 to now

```bash
> (date now) - 2019-05-01
```

Get the time duration since a more accurate time

```bash
> (date now) - 2019-05-01T04:12:05.20+08:00
```

Get current time in full RFC3339 format with timezone

```bash
> date now | debug
```
