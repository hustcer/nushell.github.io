# math sum

**version**: 0.85.0

## **usage**:

Returns the sum of a list of numbers or of each column in a table.

## Signature

`> math sum `

## Input/output types:

| input            | output   |
| ---------------- | -------- |
| list\<duration\> | duration |
| list\<filesize\> | filesize |
| list\<number\>   | number   |
| range            | number   |
| table            | table    |

## Examples

Sum a list of numbers

```bash
> [1 2 3] | math sum
```

Get the disk usage for the current directory

```bash
> ls | get size | math sum
```
