---
title: math tan
categories: |
  math
version: 0.106.0
math: |
  Returns the tangent of the number.
usage: |
  Returns the tangent of the number.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `math tan` for [math](/commands/categories/math.md)

<div class='command-title'>Returns the tangent of the number.</div>

## Signature

```> math tan {flags} ```

## Flags

 -  `--degrees, -d`: Use degrees instead of radians


## Input/output types:

| input        | output      |
| ------------ | ----------- |
| number       | float       |
| list&lt;number&gt; | list&lt;float&gt; |
## Examples

Apply the tangent to π/4
```nu
> 3.141592 / 4 | math tan | math round --precision 4
1.0
```

Apply the tangent to a list of angles in degrees
```nu
> [-45 0 45] | math tan --degrees
╭───┬───────╮
│ 0 │ -1.00 │
│ 1 │  0.00 │
│ 2 │  1.00 │
╰───┴───────╯

```
