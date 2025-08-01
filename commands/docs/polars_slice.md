---
title: polars slice
categories: |
  dataframe
version: 0.106.0
dataframe: |
  Creates new dataframe from a slice of rows.
usage: |
  Creates new dataframe from a slice of rows.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `polars slice` for [dataframe](/commands/categories/dataframe.md)

<div class='command-title'>Creates new dataframe from a slice of rows.</div>

::: warning This command requires a plugin
The `polars slice` command resides in the `polars` plugin.
To use this command, you must install and register `nu_plugin_polars`.
See the [Plugins](/book/plugins.html) chapter in the book for more information.
:::


## Signature

```> polars slice {flags} (offset) (size)```

## Parameters

 -  `offset`: start of slice
 -  `size`: size of slice


## Input/output types:

| input     | output    |
| --------- | --------- |
| dataframe | dataframe |
## Examples

Create new dataframe from a slice of the rows
```nu
> [[a b]; [1 2] [3 4]] | polars into-df | polars slice 0 1
╭───┬───┬───╮
│ # │ a │ b │
├───┼───┼───┤
│ 0 │ 1 │ 2 │
╰───┴───┴───╯

```
