---
title: math round
categories: |
  math
version: 0.106.0
math: |
  Returns the input number rounded to the specified precision.
usage: |
  Returns the input number rounded to the specified precision.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `math round` for [math](/commands/categories/math.md)

<div class='command-title'>Returns the input number rounded to the specified precision.</div>

## Signature

```> math round {flags} ```

## Flags

 -  `--precision, -p {number}`: digits of precision


## Input/output types:

| input        | output       |
| ------------ | ------------ |
| number       | number       |
| list&lt;number&gt; | list&lt;number&gt; |
| range        | list&lt;number&gt; |
## Examples

Apply the round function to a list of numbers
```nu
> [1.5 2.3 -3.1] | math round
╭───┬────╮
│ 0 │  2 │
│ 1 │  2 │
│ 2 │ -3 │
╰───┴────╯

```

Apply the round function with precision specified
```nu
> [1.555 2.333 -3.111] | math round --precision 2
╭───┬───────╮
│ 0 │  1.56 │
│ 1 │  2.33 │
│ 2 │ -3.11 │
╰───┴───────╯

```

Apply negative precision to a list of numbers
```nu
> [123, 123.3, -123.4] | math round --precision -1
╭───┬──────╮
│ 0 │  120 │
│ 1 │  120 │
│ 2 │ -120 │
╰───┴──────╯

```
