# into float

**version**: 0.85.0

## **usage**:

Convert data into floating point number.

## Signature

`> into float ...rest`

## Parameters

- `...rest`: for a data structure input, convert data at the given cell paths

## Input/output types:

| input       | output         |
| ----------- | -------------- |
| bool        | number         |
| int         | number         |
| list\<any\> | list\<number\> |
| number      | number         |
| record      | record         |
| string      | number         |
| table       | table          |

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
