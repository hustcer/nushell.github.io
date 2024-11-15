# polars replace-all

**version**: 0.100.1

## **usage**:

Replace all (sub)strings by a regex pattern.

## Signature

`> polars replace-all --pattern --replace`

## Parameters

- `--pattern {string}`: Regex pattern to be matched
- `--replace {string}`: replacing string

## Input/output types:

| input | output |
| ----- | ------ |
| any   | any    |

## Examples

Replaces string in a column

```bash
> [[a]; [abac] [abac] [abac]] | polars into-df | polars select (polars col a | polars replace-all --pattern a --replace A) | polars collect
```

Replaces string

```bash
> [abac abac abac] | polars into-df | polars replace-all --pattern a --replace A
```
