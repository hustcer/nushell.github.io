# into decimal

**version**: 0.85.0

## **usage**:

deprecated: convert data into a floating point number.

## Signature

`> into decimal ...rest`

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
> [[num]; ['5.01']] | into decimal num
```

Convert string to float

```bash
> '1.345' | into decimal
```

Coerce list of ints and floats to float

```bash
> [4 -5.9] | into decimal
```

Convert boolean to float

```bash
> true | into decimal
```

## Notes

```text
Use `into float` instead
```
