# dfr contains

**version**: 0.80.0

## **usage**:

Checks if a pattern is contained in a string.

## Signature

`> dfr contains (pattern)`

## Parameters

- `pattern`: Regex pattern to be searched

## Examples

Returns boolean indicating if pattern was found

```bash
> [abc acb acb] | dfr into-df | dfr contains ab
```
