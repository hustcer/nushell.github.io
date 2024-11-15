# math avg

**version**: 0.100.1

## **usage**:

Returns the average of a list of numbers.

## Signature

`> math avg `

## Input/output types:

| input            | output   |
| ---------------- | -------- |
| duration         | duration |
| filesize         | filesize |
| list\<duration\> | duration |
| list\<filesize\> | filesize |
| list\<number\>   | number   |
| number           | number   |
| range            | number   |
| record           | record   |
| table            | record   |

## Examples

Compute the average of a list of numbers

```bash
> [-50 100.0 25] | math avg
```

Compute the average of a list of durations

```bash
> [2sec 1min] | math avg
```

Compute the average of each column in a table

```bash
> [[a b]; [1 2] [3 4]] | math avg
```
