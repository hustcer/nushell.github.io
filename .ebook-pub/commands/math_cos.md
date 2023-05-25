# math cos

**version**: 0.80.0

## **usage**:

Returns the cosine of the number.

## Signature

`> math cos --degrees`

## Parameters

- `--degrees`: Use degrees instead of radians

## Examples

Apply the cosine to π

```bash
> math pi | math cos
```

Apply the cosine to a list of angles in degrees

```bash
> [0 90 180 270 360] | math cos -d
```
