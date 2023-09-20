# math log

**version**: 0.85.0

## **usage**:

Returns the logarithm for an arbitrary base.

## Signature

`> math log (base)`

## Parameters

- `base`: Base for which the logarithm should be computed

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<number\> | list\<number\> |
| number         | number         |

## Examples

Get the logarithm of 100 to the base 10

```bash
> 100 | math log 10
```

Get the log2 of a list of values

```bash
> [16 8 4] | math log 2
```
