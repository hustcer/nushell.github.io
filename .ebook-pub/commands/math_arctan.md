# math arctan

**version**: 0.100.1

## **usage**:

Returns the arctangent of the number.

## Signature

`> math arctan --degrees`

## Parameters

- `--degrees`: Return degrees instead of radians

## Input/output types:

| input          | output        |
| -------------- | ------------- |
| list\<number\> | list\<float\> |
| number         | float         |

## Examples

Get the arctangent of 1

```bash
> 1 | math arctan
```

Get the arctangent of -1 in degrees

```bash
> -1 | math arctan --degrees
```
