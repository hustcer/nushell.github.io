# seq

**version**: 0.80.0

## **usage**:

Output sequences of numbers.

## Signature

`> seq ...rest`

## Parameters

- `...rest`: sequence values

## Examples

sequence 1 to 10

```bash
> seq 1 10
```

sequence 1.0 to 2.0 by 0.1s

```bash
> seq 1.0 0.1 2.0
```

sequence 1 to 5, then convert to a string with a pipe separator

```bash
> seq 1 5 | str join '|'
```
