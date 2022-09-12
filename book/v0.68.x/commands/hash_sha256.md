---
title: hash sha256
version: 0.68.0
usage: |
  Hash a value using the sha256 hash algorithm
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> hash sha256 ...rest --binary```

## Parameters

 -  `...rest`: optionally sha256 hash data by cell path
 -  `--binary`: Output binary instead of hexadecimal representation

## Examples

get a hexadecimaly encoded string of the sha256 digest of a string
```shell
> echo 'abcdefghijklmnopqrstuvwxyz' | hash sha256
```

get the sha256 digest of a string in binary
```shell
> echo 'abcdefghijklmnopqrstuvwxyz' | hash sha256 --binary
```

sha256 encode a file
```shell
> open ./nu_0_24_1_windows.zip | hash sha256
```