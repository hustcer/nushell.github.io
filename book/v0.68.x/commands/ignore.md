---
title: ignore
version: 0.68.0
usage: |
  Ignore the output of the previous command in the pipeline
---

# <code>{{ $frontmatter.title }}</code>

<div style='white-space: pre-wrap;'>{{ $frontmatter.usage }}</div>

## Signature

```> ignore ```

## Examples

Ignore the output of an echo command
```shell
> echo done | ignore
```