# math mode

**version**: 0.90.2

## **usage**:

Returns the most frequent element(s) from a list of numbers or tables.

## Signature

`> math mode `

## Input/output types:

| input            | output           |
| ---------------- | ---------------- |
| list\<duration\> | list\<duration\> |
| list\<filesize\> | list\<filesize\> |
| list\<number\>   | list\<number\>   |
| table            | record           |

## Examples

Compute the mode(s) of a list of numbers

```bash
> [3 3 9 12 12 15] | math mode
```

Compute the mode(s) of the columns of a table

```bash
> [{a: 1 b: 3} {a: 2 b: -1} {a: 1 b: 5}] | math mode
```
