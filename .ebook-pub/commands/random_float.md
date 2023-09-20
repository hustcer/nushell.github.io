# random float

**version**: 0.85.0

## **usage**:

Generate a random float within a range [min..max].

## Signature

`> random float (range)`

## Parameters

- `range`: Range of values

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | number |

## Examples

Generate a default float value between 0 and 1

```bash
> random float
```

Generate a random float less than or equal to 500

```bash
> random float ..500
```

Generate a random float greater than or equal to 100000

```bash
> random float 100000..
```

Generate a random float between 1.0 and 1.1

```bash
> random float 1.0..1.1
```
