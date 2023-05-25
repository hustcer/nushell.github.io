# skip

**version**: 0.80.0

## **usage**:

Skip the first several rows of the input. Counterpart of `drop`. Opposite of `first`.

## Signature

`> skip (n)`

## Parameters

- `n`: the number of elements to skip

## Notes

```text
To skip specific numbered rows, try `drop nth`. To skip specific named columns, try `reject`.
```

## Examples

Skip the first value of a list

```bash
> [2 4 6 8] | skip 1
```

Skip two rows of a table

```bash
> [[editions]; [2015] [2018] [2021]] | skip 2
```
