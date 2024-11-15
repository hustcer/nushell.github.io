# random chars

**version**: 0.100.1

## **usage**:

Generate random chars uniformly distributed over ASCII letters and numbers: a-z, A-Z and 0-9.

## Signature

`> random chars --length`

## Parameters

- `--length {one_of(int, filesize)}`: Number of chars (default 25)

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | string |

## Examples

Generate a string with 25 random chars

```bash
> random chars
```

Generate random chars with specified length

```bash
> random chars --length 20
```

Generate one kilobyte of random chars

```bash
> random chars --length 1kb
```
