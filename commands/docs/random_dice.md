---
title: random dice
categories: |
  random
version: 0.106.0
random: |
  Generate a random dice roll.
usage: |
  Generate a random dice roll.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `random dice` for [random](/commands/categories/random.md)

<div class='command-title'>Generate a random dice roll.</div>

## Signature

```> random dice {flags} ```

## Flags

 -  `--dice, -d {int}`: The amount of dice being rolled
 -  `--sides, -s {int}`: The amount of sides a die has


## Input/output types:

| input   | output    |
| ------- | --------- |
| nothing | list&lt;int&gt; |
## Examples

Roll 1 dice with 6 sides each
```nu
> random dice

```

Roll 10 dice with 12 sides each
```nu
> random dice --dice 10 --sides 12

```
