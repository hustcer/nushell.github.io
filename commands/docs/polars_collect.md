---
title: polars collect
categories: |
  lazyframe
version: 0.106.0
lazyframe: |
  Collect lazy dataframe into eager dataframe.
usage: |
  Collect lazy dataframe into eager dataframe.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `polars collect` for [lazyframe](/commands/categories/lazyframe.md)

<div class='command-title'>Collect lazy dataframe into eager dataframe.</div>

::: warning This command requires a plugin
The `polars collect` command resides in the `polars` plugin.
To use this command, you must install and register `nu_plugin_polars`.
See the [Plugins](/book/plugins.html) chapter in the book for more information.
:::


## Signature

```> polars collect {flags} ```


## Input/output types:

| input     | output    |
| --------- | --------- |
| dataframe | dataframe |
## Examples

drop duplicates
```nu
> [[a b]; [1 2] [3 4]] | polars into-lazy | polars collect
╭───┬───┬───╮
│ # │ a │ b │
├───┼───┼───┤
│ 0 │ 1 │ 2 │
│ 1 │ 3 │ 4 │
╰───┴───┴───╯

```
