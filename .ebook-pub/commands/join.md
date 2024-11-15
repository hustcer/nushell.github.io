# join

**version**: 0.100.1

## **usage**:

Join two tables.

## Signature

`> join (right-table) (left-on) (right-on) --inner --left --right --outer`

## Parameters

- `right-table`: The right table in the join.
- `left-on`: Name of column in input (left) table to join on.
- `right-on`: Name of column in right table to join on. Defaults to same column as left table.
- `--inner`: Inner join (default)
- `--left`: Left-outer join
- `--right`: Right-outer join
- `--outer`: Outer join

## Input/output types:

| input | output |
| ----- | ------ |
| table | table  |

## Examples

Join two tables

```bash
> [{a: 1 b: 2}] | join [{a: 1 c: 3}] a
```
