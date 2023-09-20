# random bool

**version**: 0.85.0

## **usage**:

Generate a random boolean value.

## Signature

`> random bool --bias`

## Parameters

- `--bias {number}`: Adjusts the probability of a "true" outcome

## Input/output types:

| input   | output |
| ------- | ------ |
| nothing | bool   |

## Examples

Generate a random boolean value

```bash
> random bool
```

Generate a random boolean value with a 75% chance of "true"

```bash
> random bool --bias 0.75
```
