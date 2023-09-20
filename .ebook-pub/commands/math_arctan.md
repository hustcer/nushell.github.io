# math arctan

**version**: 0.85.0

## **usage**:

Returns the arctangent of the number.

## Signature

`> math arctan --degrees`

## Parameters

- `--degrees`: Return degrees instead of radians

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<number\> | list\<number\> |
| number         | number         |

## Examples

Get the arctangent of 1

```bash
> 1 | math arctan
```

Get the arctangent of -1 in degrees

```bash
> -1 | math arctan -d
```
