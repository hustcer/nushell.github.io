# math arccos

**version**: 0.85.0

## **usage**:

Returns the arccosine of the number.

## Signature

`> math arccos --degrees`

## Parameters

- `--degrees`: Return degrees instead of radians

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<number\> | list\<number\> |
| number         | number         |

## Examples

Get the arccosine of 1

```bash
> 1 | math arccos
```

Get the arccosine of -1 in degrees

```bash
> -1 | math arccos -d
```
