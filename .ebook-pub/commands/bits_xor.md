# bits xor

**version**: 0.85.0

## **usage**:

Performs bitwise xor for integers.

## Signature

`> bits xor (target)`

## Parameters

- `target`: target integer to perform bit xor

## Input/output types:

| input       | output      |
| ----------- | ----------- |
| int         | int         |
| list\<int\> | list\<int\> |

## Examples

Apply bits xor to two numbers

```bash
> 2 | bits xor 2
```

Apply logical xor to a list of numbers

```bash
> [8 3 2] | bits xor 2
```
