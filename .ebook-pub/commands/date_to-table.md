# date to-table

**version**: 0.100.1

## **usage**:

Convert the date into a structured table.

## Signature

`> date to-table `

## Input/output types:

| input    | output |
| -------- | ------ |
| datetime | table  |
| string   | table  |

## Examples

Convert the current date into a table.

```bash
> date now | date to-table
```

Convert a given date into a table.

```bash
> 2020-04-12T22:10:57.000000789+02:00 | date to-table
```

Convert a given date into a table.

```bash
> '2020-04-12 22:10:57 +0200' | into datetime | date to-table
```
