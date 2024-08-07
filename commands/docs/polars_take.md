---
title: polars take
categories: |
  dataframe
version: 0.96.0
dataframe: |
  Creates new dataframe using the given indices.
usage: |
  Creates new dataframe using the given indices.
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `polars take` for [dataframe](/commands/categories/dataframe.md)

<div class='command-title'>Creates new dataframe using the given indices.</div>

## Signature

```> polars take {flags} (indices)```

## Parameters

 -  `indices`: list of indices used to take data


## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Takes selected rows from dataframe
```nu
> let df = ([[a b]; [4 1] [5 2] [4 3]] | polars into-df);
    let indices = ([0 2] | polars into-df);
    $df | polars take $indices
╭───┬───┬───╮
│ # │ a │ b │
├───┼───┼───┤
│ 0 │ 4 │ 1 │
│ 1 │ 4 │ 3 │
╰───┴───┴───╯

```

Takes selected rows from series
```nu
> let series = ([4 1 5 2 4 3] | polars into-df);
    let indices = ([0 2] | polars into-df);
    $series | polars take $indices
╭───┬───╮
│ # │ 0 │
├───┼───┤
│ 0 │ 4 │
│ 1 │ 5 │
╰───┴───╯

```
