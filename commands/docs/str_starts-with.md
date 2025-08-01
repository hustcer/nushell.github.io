---
title: str starts-with
categories: |
  strings
version: 0.106.0
strings: |
  Check if an input starts with a string.
usage: |
  Check if an input starts with a string.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `str starts-with` for [strings](/commands/categories/strings.md)

<div class='command-title'>Check if an input starts with a string.</div>

## Signature

```> str starts-with {flags} (string) ...rest```

## Flags

 -  `--ignore-case, -i`: search is case insensitive

## Parameters

 -  `string`: The string to match.
 -  `...rest`: For a data structure input, check strings at the given cell paths, and replace with result.


## Input/output types:

| input        | output     |
| ------------ | ---------- |
| string       | bool       |
| list&lt;string&gt; | list&lt;bool&gt; |
| table        | table      |
| record       | record     |
## Examples

Checks if input string starts with 'my'
```nu
> 'my_library.rb' | str starts-with 'my'
true
```

Checks if input string starts with 'Car'
```nu
> 'Cargo.toml' | str starts-with 'Car'
true
```

Checks if input string starts with '.toml'
```nu
> 'Cargo.toml' | str starts-with '.toml'
false
```

Checks if input string starts with 'cargo', case-insensitive
```nu
> 'Cargo.toml' | str starts-with --ignore-case 'cargo'
true
```
