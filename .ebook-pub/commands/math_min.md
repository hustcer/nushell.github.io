# math min

**version**: 0.100.1

## **usage**:

Finds the minimum within a list of values or tables.

## Signature

`> math min `

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

Compute the minimum of a list of numbers

```bash
> [-50 100 25] | math min
```

Compute the minima of the columns of a table

```bash
> [{a: 1 b: 3} {a: 2 b: -1}] | math min
```

Find the minimum of a list of arbitrary values (Warning: Weird)

```bash
> [-50 'hello' true] | math min
```
