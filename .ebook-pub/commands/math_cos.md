# math cos

**version**: 0.85.0

## **usage**:

Returns the cosine of the number.

## Signature

`> math cos --degrees`

## Parameters

- `--degrees`: Use degrees instead of radians

## Input/output types:

| input          | output         |
| -------------- | -------------- |
| list\<number\> | list\<number\> |
| number         | number         |

## Examples

Apply the cosine to π

```bash
> 3.141592 | math cos | math round --precision 4
```

Apply the cosine to a list of angles in degrees

```bash
> [0 90 180 270 360] | math cos -d
```
