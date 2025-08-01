---
title: config nu
categories: |
  env
version: 0.106.0
env: |
  Edit nu configurations.
usage: |
  Edit nu configurations.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `config nu` for [env](/commands/categories/env.md)

<div class='command-title'>Edit nu configurations.</div>

## Signature

```> config nu {flags} ```

## Flags

 -  `--default, -d`: Print the internal default `config.nu` file instead.
 -  `--doc, -s`: Print a commented `config.nu` with documentation instead.


## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | any    |
## Examples

open user's config.nu in the default editor
```nu
> config nu

```

pretty-print a commented `config.nu` that explains common settings
```nu
> config nu --doc | nu-highlight

```

pretty-print the internal `config.nu` file which is loaded before user's config
```nu
> config nu --default | nu-highlight

```
