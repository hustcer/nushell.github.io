# random integer

**version**: 0.85.0

## **usage**:

Generate a random integer [min..max].

## Signature

`> random integer (range)`

## Parameters

- `range`: Range of values

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | int    |

## Examples

Generate an unconstrained random integer

```bash
> random integer
```

Generate a random integer less than or equal to 500

```bash
> random integer ..500
```

Generate a random integer greater than or equal to 100000

```bash
> random integer 100000..
```

Generate a random integer between 1 and 10

```bash
> random integer 1..10
```
