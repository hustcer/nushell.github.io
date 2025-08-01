---
title: rename
categories: |
  filters
version: 0.106.0
filters: |
  Creates a new table with columns renamed.
usage: |
  Creates a new table with columns renamed.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `rename` for [filters](/commands/categories/filters.md)

<div class='command-title'>Creates a new table with columns renamed.</div>

## Signature

```> rename {flags} ...rest```

## Flags

 -  `--column, -c {record}`: column name to be changed
 -  `--block, -b {closure(any)}`: A closure to apply changes on each column

## Parameters

 -  `...rest`: The new names for the columns.


## Input/output types:

| input  | output |
| ------ | ------ |
| record | record |
| table  | table  |
## Examples

Rename a column
```nu
> [[a, b]; [1, 2]] | rename my_column
╭───┬───────────┬───╮
│ # │ my_column │ b │
├───┼───────────┼───┤
│ 0 │         1 │ 2 │
╰───┴───────────┴───╯

```

Rename many columns
```nu
> [[a, b, c]; [1, 2, 3]] | rename eggs ham bacon
╭───┬──────┬─────┬───────╮
│ # │ eggs │ ham │ bacon │
├───┼──────┼─────┼───────┤
│ 0 │    1 │   2 │     3 │
╰───┴──────┴─────┴───────╯

```

Rename a specific column
```nu
> [[a, b, c]; [1, 2, 3]] | rename --column { a: ham }
╭───┬─────┬───┬───╮
│ # │ ham │ b │ c │
├───┼─────┼───┼───┤
│ 0 │   1 │ 2 │ 3 │
╰───┴─────┴───┴───╯

```

Rename the fields of a record
```nu
> {a: 1 b: 2} | rename x y
╭───┬───╮
│ x │ 1 │
│ y │ 2 │
╰───┴───╯
```

Rename fields based on a given closure
```nu
> {abc: 1, bbc: 2} | rename --block {str replace --all 'b' 'z'}
╭─────┬───╮
│ azc │ 1 │
│ zzc │ 2 │
╰─────┴───╯
```
