# math tan

**version**: 0.80.0

## **usage**:

Returns the tangent of the number.

## Signature

`> math tan --degrees`

## Parameters

- `--degrees`: Use degrees instead of radians

## Examples

Apply the tangent to π/4

```bash
> (math pi) / 4 | math tan
```

Apply the tangent to a list of angles in degrees

```bash
> [-45 0 45] | math tan -d
```
