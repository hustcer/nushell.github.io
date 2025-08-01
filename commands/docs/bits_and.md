---
title: bits and
categories: |
  bits
version: 0.106.0
bits: |
  Performs bitwise and for ints or binary values.
usage: |
  Performs bitwise and for ints or binary values.
editLink: false
contributors: false
---
<!-- This file is automatically generated. Please edit the command in https://github.com/nushell/nushell instead. -->

# `bits and` for [bits](/commands/categories/bits.md)

<div class='command-title'>Performs bitwise and for ints or binary values.</div>

## Signature

```> bits and {flags} (target)```

## Flags

 -  `--endian, -e {string}`: byte encode endian, available options: native(default), little, big

## Parameters

 -  `target`: Right-hand side of the operation.


## Input/output types:

| input        | output       |
| ------------ | ------------ |
| int          | int          |
| binary       | binary       |
| list&lt;int&gt;    | list&lt;int&gt;    |
| list&lt;binary&gt; | list&lt;binary&gt; |
## Examples

Apply bitwise and to two numbers
```nu
> 2 | bits and 2
2
```

Apply bitwise and to two binary values
```nu
> 0x[ab cd] | bits and 0x[99 99]
Length: 2 (0x2) bytes | printable whitespace ascii_other non_ascii
00000000:   89 89                                                ××

```

Apply bitwise and to a list of numbers
```nu
> [4 3 2] | bits and 2
╭───┬───╮
│ 0 │ 0 │
│ 1 │ 2 │
│ 2 │ 2 │
╰───┴───╯

```

Apply bitwise and to a list of binary data
```nu
> [0x[7f ff] 0x[ff f0]] | bits and 0x[99 99]
╭───┬────────────╮
│ 0 │ [25, 153]  │
│ 1 │ [153, 144] │
╰───┴────────────╯

```

Apply bitwise and to binary data of varying lengths with specified endianness
```nu
> 0x[c0 ff ee] | bits and 0x[ff] --endian big
Length: 3 (0x3) bytes | printable whitespace ascii_other non_ascii
00000000:   00 00 ee                                             00×

```

Apply bitwise and to input binary data smaller than the operand
```nu
> 0x[ff] | bits and 0x[12 34 56] --endian little
Length: 3 (0x3) bytes | printable whitespace ascii_other non_ascii
00000000:   12 00 00                                             •00

```
