# into string

**version**: 0.80.0

## **usage**:

Convert value to string.

## Signature

`> into string ...rest --decimals`

## Parameters

- `...rest`: for a data structure input, convert data at the given cell paths
- `--decimals {int}`: decimal digits to which to round

## Examples

convert integer to string and append three decimal places

```bash
> 5 | into string -d 3
```

convert decimal to string and round to nearest integer

```bash
> 1.7 | into string -d 0
```

convert decimal to string

```bash
> 1.7 | into string -d 1
```

convert decimal to string and limit to 2 decimals

```bash
> 1.734 | into string -d 2
```

try to convert decimal to string and provide negative decimal points

```bash
> 1.734 | into string -d -2
```

convert decimal to string

```bash
> 4.3 | into string
```

convert string to string

```bash
> '1234' | into string
```

convert boolean to string

```bash
> true | into string
```

convert filepath to string

```bash
> ls Cargo.toml | get name | into string
```

convert filesize to string

```bash
> 1KiB | into string
```
