---
title: random
categories: |
  random
version: 0.106.0
random: |
  Generate a random value.
usage: |
  Generate a random value.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `random` for [random](/commands/categories/random.md)

<div class='command-title'>Generate a random value.</div>

## Signature

```> random {flags} ```


## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |
## Notes
You must use one of the following subcommands. Using this command as-is will only produce this help message.

## Subcommands:

| name                                               | description                                                                                   | type     |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------- |
| [`random binary`](/commands/docs/random_binary.md) | Generate random bytes.                                                                        | built-in |
| [`random bool`](/commands/docs/random_bool.md)     | Generate a random boolean value.                                                              | built-in |
| [`random chars`](/commands/docs/random_chars.md)   | Generate random chars uniformly distributed over ASCII letters and numbers: a-z, A-Z and 0-9. | built-in |
| [`random dice`](/commands/docs/random_dice.md)     | Generate a random dice roll.                                                                  | built-in |
| [`random float`](/commands/docs/random_float.md)   | Generate a random float within a range [min..max].                                            | built-in |
| [`random int`](/commands/docs/random_int.md)       | Generate a random integer [min..max].                                                         | built-in |
| [`random uuid`](/commands/docs/random_uuid.md)     | Generate a random uuid string of the specified version.                                       | built-in |