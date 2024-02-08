# dfr replace-all

**version**: 0.90.2

## **usage**:

Replace all (sub)strings by a regex pattern.

## Signature

`> dfr replace-all --pattern --replace`

## Parameters

- `--pattern {string}`: Regex pattern to be matched
- `--replace {string}`: replacing string

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Replaces string

```bash
> [abac abac abac] | dfr into-df | dfr replace-all --pattern a --replace A
```
