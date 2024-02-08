# bits or

**version**: 0.90.2

## **usage**:

Performs bitwise or for ints.

## Signature

`> bits or (target)`

## Parameters

- `target`: target int to perform bit or

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| int         | int         |
| list\<int\> | list\<int\> |

## Examples

Apply bits or to two numbers

```bash
> 2 | bits or 6
```

Apply logical or to a list of numbers

```bash
> [8 3 2] | bits or 2
```
