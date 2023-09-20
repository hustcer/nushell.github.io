# rename

**version**: 0.85.0

## **usage**:

Creates a new table with columns renamed.

## Signature

`> rename ...rest --column --block`

## Parameters

- `...rest`: the new names for the columns
- `--column {list<string>}`: column name to be changed
- `--block {closure(any)}`: A closure to apply changes on each column

## Input/output types:

| input  | output |
| ------ | ------ |
| record | record |
| table  | table  |

## Examples

Rename a column

```bash
> [[a, b]; [1, 2]] | rename my_column
```

Rename many columns

```bash
> [[a, b, c]; [1, 2, 3]] | rename eggs ham bacon
```

Rename a specific column

```bash
> [[a, b, c]; [1, 2, 3]] | rename -c [a ham]
```

Rename the fields of a record

```bash
> {a: 1 b: 2} | rename x y
```

Rename fields based on a given closure

```bash
> {abc: 1, bbc: 2} | rename -b {str replace -a 'b' 'z'}
```
