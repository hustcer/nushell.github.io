---
title: split list
categories: |
  filters
version: 0.106.0
filters: |
  Split a list into multiple lists using a separator.
usage: |
  Split a list into multiple lists using a separator.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `split list` for [filters](/commands/categories/filters.md)

<div class='command-title'>Split a list into multiple lists using a separator.</div>

## Signature

```> split list {flags} (separator)```

## Flags

 -  `--regex, -r`: separator is a regular expression, matching values that can be coerced into a string
 -  `--split {string}`: Whether to split lists before, after, or on (default) the separator

## Parameters

 -  `separator`: The value that denotes what separates the list.


## Input/output types:

| input     | output          |
| --------- | --------------- |
| list&lt;any&gt; | list&lt;list&lt;any&gt;&gt; |
## Examples

Split a list of chars into two lists
```nu
> [a, b, c, d, e, f, g] | split list d
╭───┬───────────╮
│ 0 │ ╭───┬───╮ │
│   │ │ 0 │ a │ │
│   │ │ 1 │ b │ │
│   │ │ 2 │ c │ │
│   │ ╰───┴───╯ │
│ 1 │ ╭───┬───╮ │
│   │ │ 0 │ e │ │
│   │ │ 1 │ f │ │
│   │ │ 2 │ g │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯

```

Split a list of lists into two lists of lists
```nu
> [[1,2], [2,3], [3,4]] | split list [2,3]
╭───┬───────────────────╮
│ 0 │ ╭───┬───────────╮ │
│   │ │ 0 │ ╭───┬───╮ │ │
│   │ │   │ │ 0 │ 1 │ │ │
│   │ │   │ │ 1 │ 2 │ │ │
│   │ │   │ ╰───┴───╯ │ │
│   │ ╰───┴───────────╯ │
│ 1 │ ╭───┬───────────╮ │
│   │ │ 0 │ ╭───┬───╮ │ │
│   │ │   │ │ 0 │ 3 │ │ │
│   │ │   │ │ 1 │ 4 │ │ │
│   │ │   │ ╰───┴───╯ │ │
│   │ ╰───┴───────────╯ │
╰───┴───────────────────╯

```

Split a list of chars into two lists
```nu
> [a, b, c, d, a, e, f, g] | split list a
╭───┬────────────────╮
│ 0 │ [list 0 items] │
│ 1 │ ╭───┬───╮      │
│   │ │ 0 │ b │      │
│   │ │ 1 │ c │      │
│   │ │ 2 │ d │      │
│   │ ╰───┴───╯      │
│ 2 │ ╭───┬───╮      │
│   │ │ 0 │ e │      │
│   │ │ 1 │ f │      │
│   │ │ 2 │ g │      │
│   │ ╰───┴───╯      │
╰───┴────────────────╯

```

Split a list of chars into lists based on multiple characters
```nu
> [a, b, c, d, a, e, f, g] | split list --regex '(b|e)'
╭───┬───────────╮
│ 0 │ ╭───┬───╮ │
│   │ │ 0 │ a │ │
│   │ ╰───┴───╯ │
│ 1 │ ╭───┬───╮ │
│   │ │ 0 │ c │ │
│   │ │ 1 │ d │ │
│   │ │ 2 │ a │ │
│   │ ╰───┴───╯ │
│ 2 │ ╭───┬───╮ │
│   │ │ 0 │ f │ │
│   │ │ 1 │ g │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯

```

Split a list of numbers on multiples of 3
```nu
> [1 2 3 4 5 6 7 8 9 10] | split list {|e| $e mod 3 == 0 }
╭───┬────────────╮
│ 0 │ ╭───┬───╮  │
│   │ │ 0 │ 1 │  │
│   │ │ 1 │ 2 │  │
│   │ ╰───┴───╯  │
│ 1 │ ╭───┬───╮  │
│   │ │ 0 │ 4 │  │
│   │ │ 1 │ 5 │  │
│   │ ╰───┴───╯  │
│ 2 │ ╭───┬───╮  │
│   │ │ 0 │ 7 │  │
│   │ │ 1 │ 8 │  │
│   │ ╰───┴───╯  │
│ 3 │ ╭───┬────╮ │
│   │ │ 0 │ 10 │ │
│   │ ╰───┴────╯ │
╰───┴────────────╯

```

Split a list of numbers into lists ending with 0
```nu
> [1 2 0 3 4 5 0 6 0 0 7] | split list --split after 0
╭───┬───────────╮
│ 0 │ ╭───┬───╮ │
│   │ │ 0 │ 1 │ │
│   │ │ 1 │ 2 │ │
│   │ │ 2 │ 0 │ │
│   │ ╰───┴───╯ │
│ 1 │ ╭───┬───╮ │
│   │ │ 0 │ 3 │ │
│   │ │ 1 │ 4 │ │
│   │ │ 2 │ 5 │ │
│   │ │ 3 │ 0 │ │
│   │ ╰───┴───╯ │
│ 2 │ ╭───┬───╮ │
│   │ │ 0 │ 6 │ │
│   │ │ 1 │ 0 │ │
│   │ ╰───┴───╯ │
│ 3 │ ╭───┬───╮ │
│   │ │ 0 │ 0 │ │
│   │ ╰───┴───╯ │
│ 4 │ ╭───┬───╮ │
│   │ │ 0 │ 7 │ │
│   │ ╰───┴───╯ │
╰───┴───────────╯

```
