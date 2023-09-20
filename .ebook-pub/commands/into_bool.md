# into bool

**version**: 0.85.0

## **usage**:

Convert value to boolean.

## Signature

`> into bool ...rest`

## Parameters

- `...rest`: for a data structure input, convert data at the given cell paths

## Input/output types:

| input       | output |
| ----------- | ------ |
| bool        | bool   |
| int         | bool   |
| list\<any\> | table  |
| number      | bool   |
| record      | record |
| string      | bool   |
| table       | table  |

## Examples

Convert value to boolean in table

```bash
> [[value]; ['false'] ['1'] [0] [1.0] [true]] | into bool value
```

Convert bool to boolean

```bash
> true | into bool
```

convert integer to boolean

```bash
> 1 | into bool
```

convert float to boolean

```bash
> 0.3 | into bool
```

convert float string to boolean

```bash
> '0.0' | into bool
```

convert string to boolean

```bash
> 'true' | into bool
```
