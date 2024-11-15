# polars replace

**version**: 0.100.1

## **usage**:

Replace the leftmost (sub)string by a regex pattern.

## Signature

`> polars replace --pattern --replace`

## Parameters

- `--pattern {string}`: Regex pattern to be matched
- `--replace {string}`: replacing string

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Replaces string in column

```bash
> [[a]; [abc] [abcabc]] | polars into-df | polars select (polars col a | polars replace --pattern ab --replace AB) | polars collect
```

Replaces string

```bash
> [abc abc abc] | polars into-df | polars replace --pattern ab --replace AB
```
