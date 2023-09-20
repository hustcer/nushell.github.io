# math arcsin

**version**: 0.85.0

## **usage**:

Returns the arcsine of the number.

## Signature

`> math arcsin --degrees`

## Parameters

- `--degrees`: Return degrees instead of radians

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<number\> | list\<number\> |
| number         | number         |

## Examples

Get the arcsine of 1

```bash
> 1 | math arcsin
```

Get the arcsine of 1 in degrees

```bash
> 1 | math arcsin -d
```
