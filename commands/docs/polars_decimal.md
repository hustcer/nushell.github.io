---
title: polars decimal
categories: |
  dataframe
version: 0.106.0
dataframe: |
  Converts a string column into a decimal column
usage: |
  Converts a string column into a decimal column
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `polars decimal` for [dataframe](/commands/categories/dataframe.md)

<div class='command-title'>Converts a string column into a decimal column</div>

::: warning This command requires a plugin
The `polars decimal` command resides in the `polars` plugin.
To use this command, you must install and register `nu_plugin_polars`.
See the [Plugins](/book/plugins.html) chapter in the book for more information.
:::


## Signature

```> polars decimal {flags} (infer_length)```

## Parameters

 -  `infer_length`: Number of decimal points to infer


## Input/output types:

| input      | output     |
| ---------- | ---------- |
| expression | expression |
## Examples

Modifies strings to decimal
```nu
> [[a b]; [1, '2.4']] | polars into-df | polars select (polars col b | polars decimal 2) | polars collect
╭───┬──────╮
│ # │  b   │
├───┼──────┤
│ 0 │ 2.40 │
╰───┴──────╯

```
