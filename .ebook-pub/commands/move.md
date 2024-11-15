# move

**version**: 0.100.1

## **usage**:

Move columns before or after other columns.

## Signature

`> move ...rest --after --before`

## Parameters

- `...rest`: The columns to move.
- `--after {string}`: the column that will precede the columns moved
- `--before {string}`: the column that will be the next after the columns moved

## Input/output types:

| input  | output |
| ------ | ------ |
| record | record |
| table  | table  |

## Examples

Move a column before the first column

```bash
> [[name value index]; [foo a 1] [bar b 2] [baz c 3]] | move index --before name
```

Move multiple columns after the last column and reorder them

```bash
> [[name value index]; [foo a 1] [bar b 2] [baz c 3]] | move value name --after index
```

Move columns of a record

```bash
> { name: foo, value: a, index: 1 } | move name --before index
```
