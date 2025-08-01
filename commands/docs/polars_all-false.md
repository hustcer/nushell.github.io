---
title: polars all-false
categories: |
  dataframe
version: 0.106.0
dataframe: |
  Returns true if all values are false.
usage: |
  Returns true if all values are false.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `polars all-false` for [dataframe](/commands/categories/dataframe.md)

<div class='command-title'>Returns true if all values are false.</div>

::: warning This command requires a plugin
The `polars all-false` command resides in the `polars` plugin.
To use this command, you must install and register `nu_plugin_polars`.
See the [Plugins](/book/plugins.html) chapter in the book for more information.
:::


## Signature

```> polars all-false {flags} ```


## Input/output types:

| input     | output    |
| --------- | --------- |
| dataframe | dataframe |
## Examples

Returns true if all values are false
```nu
> [false false false] | polars into-df | polars all-false
╭───┬───────────╮
│ # │ all_false │
├───┼───────────┤
│ 0 │ true      │
╰───┴───────────╯

```

Checks the result from a comparison
```nu
> let s = ([5 6 2 10] | polars into-df);
    let res = ($s > 9);
    $res | polars all-false
╭───┬───────────╮
│ # │ all_false │
├───┼───────────┤
│ 0 │ false     │
╰───┴───────────╯

```
