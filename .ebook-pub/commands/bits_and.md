# bits and

**version**: 0.90.2

## **usage**:

Performs bitwise and for ints.

## Signature

`> bits and (target)`

## Parameters

- `target`: target int to perform bit and

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| int         | int         |
| list\<int\> | list\<int\> |

## Examples

Apply bits and to two numbers

```bash
> 2 | bits and 2
```

Apply logical and to a list of numbers

```bash
> [4 3 2] | bits and 2
```
