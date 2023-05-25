# str reverse

**version**: 0.80.0

## **usage**:

Reverse every string in the pipeline.

## Signature

`> str reverse ...rest`

## Parameters

- `...rest`: For a data structure input, reverse strings at the given cell paths

## Examples

Reverse a single string

```bash
> 'Nushell' | str reverse
```

Reverse multiple strings in a list

```bash
> ['Nushell' 'is' 'cool'] | str reverse
```
