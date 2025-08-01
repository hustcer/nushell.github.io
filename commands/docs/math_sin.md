---
title: math sin
categories: |
  math
version: 0.106.0
math: |
  Returns the sine of the number.
usage: |
  Returns the sine of the number.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `math sin` for [math](/commands/categories/math.md)

<div class='command-title'>Returns the sine of the number.</div>

## Signature

```> math sin {flags} ```

## Flags

 -  `--degrees, -d`: Use degrees instead of radians


## Input/output types:

| input        | output      |
| ------------ | ----------- |
| number       | float       |
| list&lt;number&gt; | list&lt;float&gt; |
## Examples

Apply the sine to π/2
```nu
> 3.141592 / 2 | math sin | math round --precision 4
1.0
```

Apply the sine to a list of angles in degrees
```nu
> [0 90 180 270 360] | math sin -d | math round --precision 4
╭───┬───────╮
│ 0 │  0.00 │
│ 1 │  1.00 │
│ 2 │  0.00 │
│ 3 │ -1.00 │
│ 4 │  0.00 │
╰───┴───────╯

```
