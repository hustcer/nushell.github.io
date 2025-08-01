---
title: to nuon
categories: |
  formats
version: 0.106.0
formats: |
  Converts table data into Nuon (Nushell Object Notation) text.
usage: |
  Converts table data into Nuon (Nushell Object Notation) text.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `to nuon` for [formats](/commands/categories/formats.md)

<div class='command-title'>Converts table data into Nuon (Nushell Object Notation) text.</div>

## Signature

```> to nuon {flags} ```

## Flags

 -  `--raw, -r`: remove all of the whitespace (overwrites -i and -t)
 -  `--indent, -i {number}`: specify indentation width
 -  `--tabs, -t {number}`: specify indentation tab quantity
 -  `--serialize, -s`: serialize nushell types that cannot be deserialized


## Input/output types:

| input | output |
| ----- | ------ |
| any   | string |
## Examples

Outputs a NUON string representing the contents of this list, compact by default
```nu
> [1 2 3] | to nuon
[1, 2, 3]
```

Outputs a NUON array of ints, with pretty indentation
```nu
> [1 2 3] | to nuon --indent 2
[
  1,
  2,
  3
]
```

Overwrite any set option with --raw
```nu
> [1 2 3] | to nuon --indent 2 --raw
[1,2,3]
```

A more complex record with multiple data types
```nu
> {date: 2000-01-01, data: [1 [2 3] 4.56]} | to nuon --indent 2
{
  date: 2000-01-01T00:00:00+00:00,
  data: [
    1,
    [
      2,
      3
    ],
    4.56
  ]
}
```

A more complex record with --raw
```nu
> {date: 2000-01-01, data: [1 [2 3] 4.56]} | to nuon --raw
{date:2000-01-01T00:00:00+00:00,data:[1,[2,3],4.56]}
```
