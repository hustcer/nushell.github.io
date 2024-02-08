# math median

**version**: 0.90.2

## **usage**:

Computes the median of a list of numbers.

## Signature

`> math median `

## Input/output types:

| input            | output   |
| ---------------- | -------- |
| list\<duration\> | duration |
| list\<filesize\> | filesize |
| list\<number\>   | number   |
| range            | number   |
| record           | record   |
| table            | record   |

## Examples

Compute the median of a list of numbers

```bash
> [3 8 9 12 12 15] | math median
```

Compute the medians of the columns of a table

```bash
> [{a: 1 b: 3} {a: 2 b: -1} {a: -3 b: 5}] | math median
```

Find the median of a list of file sizes

```bash
> [5KB 10MB 200B] | math median
```
