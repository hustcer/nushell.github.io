# math tan

**version**: 0.100.1

## **usage**:

Returns the tangent of the number.

## Signature

`> math tan --degrees`

## Parameters

- `--degrees`: Use degrees instead of radians

## Input/output types:

| input          | output        |
| -------------- | ------------- |
| list\<number\> | list\<float\> |
| number         | float         |

## Examples

Apply the tangent to π/4

```bash
> 3.141592 / 4 | math tan | math round --precision 4
```

Apply the tangent to a list of angles in degrees

```bash
> [-45 0 45] | math tan --degrees
```
