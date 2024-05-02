# into float

**version**: 0.93.0

## **usage**:

Convert data into floating point number.

## Signature

`> into float ...rest`

## Parameters

- `...rest`: For a data structure input, convert data at the given cell paths.

## Input/output types:

| input       | output        |
| ----------- | ------------- |
| bool        | float         |
| float       | float         |
| int         | float         |
| list\<any\> | list\<float\> |
| record      | record        |
| string      | float         |
| table       | table         |

## Examples

Convert string to float in table

```bash
> [[num]; ['5.01']] | into float num
```

Convert string to floating point number

```bash
> '1.345' | into float
```

Coerce list of ints and floats to float

```bash
> [4 -5.9] | into float
```

Convert boolean to float

```bash
> true | into float
```
