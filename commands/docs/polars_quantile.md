---
title: polars quantile
categories: |
  lazyframe
version: 0.106.0
lazyframe: |
  Aggregates the columns to the selected quantile.
usage: |
  Aggregates the columns to the selected quantile.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `polars quantile` for [lazyframe](/commands/categories/lazyframe.md)

<div class='command-title'>Aggregates the columns to the selected quantile.</div>

::: warning This command requires a plugin
The `polars quantile` command resides in the `polars` plugin.
To use this command, you must install and register `nu_plugin_polars`.
See the [Plugins](/book/plugins.html) chapter in the book for more information.
:::


## Signature

```> polars quantile {flags} (quantile)```

## Parameters

 -  `quantile`: quantile value for quantile operation


## Input/output types:

| input      | output     |
| ---------- | ---------- |
| expression | expression |
| dataframe  | dataframe  |
## Examples

quantile value from columns in a dataframe
```nu
> [[a b]; [6 2] [1 4] [4 1]] | polars into-df | polars quantile 0.5
╭───┬──────┬──────╮
│ # │  a   │  b   │
├───┼──────┼──────┤
│ 0 │ 4.00 │ 2.00 │
╰───┴──────┴──────╯

```

Quantile aggregation for a group-by
```nu
> [[a b]; [one 2] [one 4] [two 1]]
                    | polars into-df
                    | polars group-by a
                    | polars agg (polars col b | polars quantile 0.5)
                    | polars collect
                    | polars sort-by a
╭───┬─────┬──────╮
│ # │  a  │  b   │
├───┼─────┼──────┤
│ 0 │ one │ 4.00 │
│ 1 │ two │ 1.00 │
╰───┴─────┴──────╯

```
