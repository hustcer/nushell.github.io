# date to-record

**version**: 0.100.1

## **usage**:

Convert the date into a record.

## Signature

`> date to-record `

## Input/output types:

| input    | output |
| -------- | ------ |
| datetime | record |
| string   | record |

## Examples

Convert the current date into a record.

```bash
> date now | date to-record
```

Convert a date string into a record.

```bash
> '2020-04-12T22:10:57.123+02:00' | date to-record
```

Convert a date into a record.

```bash
> '2020-04-12 22:10:57 +0200' | into datetime | date to-record
```
