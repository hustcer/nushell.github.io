# random decimal

**version**: 0.80.0

## **usage**:

Generate a random decimal within a range [min..max].

## Signature

`> random decimal (range)`

## Parameters

- `range`: Range of values

## Examples

Generate a default decimal value between 0 and 1

```bash
> random decimal
```

Generate a random decimal less than or equal to 500

```bash
> random decimal ..500
```

Generate a random decimal greater than or equal to 100000

```bash
> random decimal 100000..
```

Generate a random decimal between 1.0 and 1.1

```bash
> random decimal 1.0..1.1
```
