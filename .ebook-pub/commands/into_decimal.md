# into decimal

**version**: 0.80.0

## **usage**:

Convert text into a decimal.

## Signature

`> into decimal ...rest`

## Parameters

- `...rest`: for a data structure input, convert data at the given cell paths

## Examples

Convert string to decimal in table

```bash
> [[num]; ['5.01']] | into decimal num
```

Convert string to decimal

```bash
> '1.345' | into decimal
```

Convert decimal to decimal

```bash
> '-5.9' | into decimal
```

Convert boolean to decimal

```bash
> true | into decimal
```
