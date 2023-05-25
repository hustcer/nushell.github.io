# seq char

**version**: 0.80.0

## **usage**:

Print a sequence of ASCII characters.

## Signature

`> seq char (start) (end)`

## Parameters

- `start`: start of character sequence (inclusive)
- `end`: end of character sequence (inclusive)

## Examples

sequence a to e

```bash
> seq char a e
```

sequence a to e, and put the characters in a pipe-separated string

```bash
> seq char a e | str join '|'
```
