# math max

**version**: 0.90.2

## **usage**:

Returns the maximum of a list of values, or of columns in a table.

## Signature

`> math max `

## Input/output types:

| input            | output   |
| ---------------- | -------- |
| list\<any\>      | any      |
| list\<duration\> | duration |
| list\<filesize\> | filesize |
| list\<number\>   | number   |
| range            | number   |
| record           | record   |
| table            | record   |

## Examples

Find the maximum of a list of numbers

```bash
> [-50 100 25] | math max
```

Find the maxima of the columns of a table

```bash
> [{a: 1 b: 3} {a: 2 b: -1}] | math max
```

Find the maximum of a list of dates

```bash
> [2022-02-02 2022-12-30 2012-12-12] | math max
```
