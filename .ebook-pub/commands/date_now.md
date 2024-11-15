# date now

**version**: 0.100.1

## **usage**:

Get the current date.

## Signature

`> date now `

## Input/output types:

| input   | output   |
| ------- | -------- |
| nothing | datetime |

## Examples

Get the current date and display it in a given format string.

```bash
> date now | format date "%Y-%m-%d %H:%M:%S"
```

Get the time duration since 2019-04-30.

```bash
> (date now) - 2019-05-01
```

Get the time duration since a more specific time.

```bash
> (date now) - 2019-05-01T04:12:05.20+08:00
```

Get current time in full RFC 3339 format with time zone.

```bash
> date now | debug
```
