# math round

**version**: 0.80.0

## **usage**:

Returns the input number rounded to the specified precision.

## Signature

`> math round --precision`

## Parameters

- `--precision {number}`: digits of precision

## Examples

Apply the round function to a list of numbers

```bash
> [1.5 2.3 -3.1] | math round
```

Apply the round function with precision specified

```bash
> [1.555 2.333 -3.111] | math round -p 2
```

Apply negative precision to a list of numbers

```bash
> [123, 123.3, -123.4] | math round -p -1
```
