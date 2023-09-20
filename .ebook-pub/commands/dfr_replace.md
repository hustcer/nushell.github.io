# dfr replace

**version**: 0.85.0

## **usage**:

Replace the leftmost (sub)string by a regex pattern.

## Signature

`> dfr replace --pattern --replace`

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
> [abc abc abc] | dfr into-df | dfr replace -p ab -r AB
```
