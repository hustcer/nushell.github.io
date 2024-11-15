# random int

**version**: 0.100.1

## **usage**:

Generate a random integer [min..max].

## Signature

`> random int (range)`

## Parameters

- `range`: Range of potential values, inclusive of both start and end values.

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | int    |

## Examples

Generate a non-negative random integer

```bash
> random int
```

Generate a random integer between 0 (inclusive) and 500 (inclusive)

```bash
> random int ..500
```

Generate a random integer greater than or equal to 100000

```bash
> random int 100000..
```

Generate a random integer between -10 (inclusive) and 10 (inclusive)

```bash
> random int (-10)..10
```
