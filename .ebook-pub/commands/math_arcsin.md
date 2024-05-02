# math arcsin

**version**: 0.93.0

## **usage**:

Returns the arcsine of the number.

## Signature

`> math arcsin --degrees`

## Parameters

- `--degrees`: Return degrees instead of radians

## Input/output types:

| input          | output        |
| -------------- | ------------- |
| list\<number\> | list\<float\> |
| number         | float         |

## Examples

Get the arcsine of 1

```bash
> 1 | math arcsin
```

Get the arcsine of 1 in degrees

```bash
> 1 | math arcsin --degrees
```
