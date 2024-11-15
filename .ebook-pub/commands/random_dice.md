# random dice

**version**: 0.100.1

## **usage**:

Generate a random dice roll.

## Signature

`> random dice --dice --sides`

## Parameters

- `--dice {int}`: The amount of dice being rolled
- `--sides {int}`: The amount of sides a die has

## Input/output types:

| input   | output      |
| ------- | ----------- |
| nothing | list\<any\> |

## Examples

Roll 1 dice with 6 sides each

```bash
> random dice
```

Roll 10 dice with 12 sides each

```bash
> random dice --dice 10 --sides 12
```
