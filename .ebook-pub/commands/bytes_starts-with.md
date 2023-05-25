# bytes starts-with

**version**: 0.80.0

## **usage**:

Check if bytes starts with a pattern.

## Signature

`> bytes starts-with (pattern) ...rest`

## Parameters

- `pattern`: the pattern to match
- `...rest`: for a data structure input, check if bytes at the given cell paths start with the pattern

## Examples

Checks if binary starts with `0x[1F FF AA]`

```bash
> 0x[1F FF AA AA] | bytes starts-with 0x[1F FF AA]
```

Checks if binary starts with `0x[1F]`

```bash
> 0x[1F FF AA AA] | bytes starts-with 0x[1F]
```

Checks if binary starts with `0x[1F]`

```bash
> 0x[1F FF AA AA] | bytes starts-with 0x[11]
```
