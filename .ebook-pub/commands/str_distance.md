# str distance

**version**: 0.93.0

## **usage**:

Compare two strings and return the edit distance/Levenshtein distance.

## Signature

`> str distance (compare-string) ...rest`

## Parameters

- `compare-string`: The first string to compare.
- `...rest`: For a data structure input, check strings at the given cell paths, and replace with result.

## Input/output types:

| input  | output |
| ------ | ------ |
| record | record |
| string | int    |
| table  | table  |

## Examples

get the edit distance between two strings

```bash
> 'nushell' | str distance 'nutshell'
```

Compute edit distance between strings in table and another string, using cell paths

```bash
> [{a: 'nutshell' b: 'numetal'}] | str distance 'nushell' 'a' 'b'
```

Compute edit distance between strings in record and another string, using cell paths

```bash
> {a: 'nutshell' b: 'numetal'} | str distance 'nushell' a b
```
