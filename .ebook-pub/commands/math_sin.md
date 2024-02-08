# math sin

**version**: 0.90.2

## **usage**:

Returns the sine of the number.

## Signature

`> math sin --degrees`

## Parameters

- `--degrees`: Use degrees instead of radians

## Input/output types:

| input          | output        |
| -------------- | ------------- |
| list\<number\> | list\<float\> |
| number         | float         |

## Examples

Apply the sine to π/2

```bash
> 3.141592 / 2 | math sin | math round --precision 4
```

Apply the sine to a list of angles in degrees

```bash
> [0 90 180 270 360] | math sin -d | math round --precision 4
```
