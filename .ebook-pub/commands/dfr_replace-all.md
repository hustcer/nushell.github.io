# dfr replace-all

**version**: 0.80.0

## **usage**:

Replace all (sub)strings by a regex pattern.

## Signature

`> dfr replace-all --pattern --replace`

## Parameters

- `--pattern {string}`: Regex pattern to be matched
- `--replace {string}`: replacing string

## Examples

Replaces string

```bash
> [abac abac abac] | dfr into-df | dfr replace-all -p a -r A
```
