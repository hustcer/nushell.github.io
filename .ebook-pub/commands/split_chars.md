# split chars

**version**: 0.80.0

## **usage**:

Split a string into a list of characters.

## Signature

`> split chars --grapheme-clusters --code-points`

## Parameters

- `--grapheme-clusters`: split on grapheme clusters
- `--code-points`: split on code points (default; splits combined characters)

## Examples

Split the string into a list of characters

```bash
> 'hello' | split chars
```

Split on grapheme clusters

```bash
> '🇯🇵ほげ' | split chars -g
```
