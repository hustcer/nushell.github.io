# math arccos

**version**: 0.93.0

## **usage**:

Returns the arccosine of the number.

## Signature

`> math arccos --degrees`

## Parameters

- `--degrees`: Return degrees instead of radians

## Input/output types:

| input          | output        |
| -------------- | ------------- |
| list\<number\> | list\<float\> |
| number         | float         |

## Examples

Get the arccosine of 1

```bash
> 1 | math arccos
```

Get the arccosine of -1 in degrees

```bash
> -1 | math arccos --degrees
```
