# seq char

**version**: 0.93.0

## **usage**:

Print a sequence of ASCII characters.

## Signature

`> seq char (start) (end)`

## Parameters

- `start`: Start of character sequence (inclusive).
- `end`: End of character sequence (inclusive).

## Input/output types:

| input   | output         |
| ------- | -------------- |
| nothing | list\<string\> |

## Examples

sequence a to e

```bash
> seq char a e
```

sequence a to e, and put the characters in a pipe-separated string

```bash
> seq char a e | str join '|'
```
