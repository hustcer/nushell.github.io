# str distance

**version**: 0.80.0

## **usage**:

Compare two strings and return the edit distance/Levenshtein distance.

## Signature

`> str distance (compare-string) ...rest`

## Parameters

- `compare-string`: the first string to compare
- `...rest`: For a data structure input, check strings at the given cell paths, and replace with result

## Examples

get the edit distance between two strings

```bash
> 'nushell' | str distance 'nutshell'
```

Compute edit distance between strings in record and another string, using cell paths

```bash
> [{a: 'nutshell' b: 'numetal'}] | str distance 'nushell' 'a' 'b'
```
