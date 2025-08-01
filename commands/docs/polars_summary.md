---
title: polars summary
categories: |
  dataframe
version: 0.106.0
dataframe: |
  For a dataframe, produces descriptive statistics (summary statistics) for its numeric columns.
usage: |
  For a dataframe, produces descriptive statistics (summary statistics) for its numeric columns.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `polars summary` for [dataframe](/commands/categories/dataframe.md)

<div class='command-title'>For a dataframe, produces descriptive statistics (summary statistics) for its numeric columns.</div>

::: warning This command requires a plugin
The `polars summary` command resides in the `polars` plugin.
To use this command, you must install and register `nu_plugin_polars`.
See the [Plugins](/book/plugins.html) chapter in the book for more information.
:::


## Signature

```> polars summary {flags} ```

## Flags

 -  `--quantiles, -q {list<float>}`: provide optional quantiles


## Input/output types:

| input     | output    |
| --------- | --------- |
| dataframe | dataframe |
## Examples

list dataframe descriptives
```nu
> [[a b]; [1 1] [1 1]] | polars into-df | polars summary
╭───┬────────────┬─────────┬─────────╮
│ # │ descriptor │ a (i64) │ b (i64) │
├───┼────────────┼─────────┼─────────┤
│ 0 │ count      │    2.00 │    2.00 │
│ 1 │ sum        │    2.00 │    2.00 │
│ 2 │ mean       │    1.00 │    1.00 │
│ 3 │ median     │    1.00 │    1.00 │
│ 4 │ std        │    0.00 │    0.00 │
│ 5 │ min        │    1.00 │    1.00 │
│ 6 │ 25%        │    1.00 │    1.00 │
│ 7 │ 50%        │    1.00 │    1.00 │
│ 8 │ 75%        │    1.00 │    1.00 │
│ 9 │ max        │    1.00 │    1.00 │
╰───┴────────────┴─────────┴─────────╯

```
