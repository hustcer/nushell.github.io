# math sin

**version**: 0.80.0

## **usage**:

Returns the sine of the number.

## Signature

`> math sin --degrees`

## Parameters

- `--degrees`: Use degrees instead of radians

## Examples

Apply the sine to π/2

```bash
> (math pi) / 2 | math sin
```

Apply the sine to a list of angles in degrees

```bash
> [0 90 180 270 360] | math sin -d | math round --precision 4
```
