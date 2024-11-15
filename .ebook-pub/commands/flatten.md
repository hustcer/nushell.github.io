# flatten

**version**: 0.100.1

## **usage**:

Flatten the table.

## Signature

`> flatten ...rest --all`

## Parameters

- `...rest`: Optionally flatten data by column.
- `--all`: flatten inner table one level out

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| list\<any\> | list\<any\> |
| record      | table       |

## Examples

flatten a table

```bash
> [[N, u, s, h, e, l, l]] | flatten
```

flatten a table, get the first item

```bash
> [[N, u, s, h, e, l, l]] | flatten | first
```

flatten a column having a nested table

```bash
> [[origin, people]; [Ecuador, ([[name, meal]; ['Andres', 'arepa']])]] | flatten --all | get meal
```

restrict the flattening by passing column names

```bash
> [[origin, crate, versions]; [World, ([[name]; ['nu-cli']]), ['0.21', '0.22']]] | flatten versions --all | last | get versions
```

Flatten inner table

```bash
> { a: b, d: [ 1 2 3 4 ], e: [ 4 3 ] } | flatten d --all
```
