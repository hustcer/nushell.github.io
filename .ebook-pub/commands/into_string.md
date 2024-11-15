# into string

**version**: 0.100.1

## **usage**:

Convert value to string.

## Signature

`> into string ...rest --decimals`

## Parameters

- `...rest`: For a data structure input, convert data at the given cell paths.
- `--decimals {int}`: decimal digits to which to round

## Input/output types:

| input       | output         |
| ----------- | -------------- |
| binary      | string         |
| bool        | string         |
| datetime    | string         |
| duration    | string         |
| filesize    | string         |
| glob        | string         |
| int         | string         |
| list\<any\> | list\<string\> |
| number      | string         |
| record      | record         |
| string      | string         |
| table       | table          |

## Examples

convert int to string and append three decimal places

```bash
> 5 | into string --decimals 3
```

convert float to string and round to nearest integer

```bash
> 1.7 | into string --decimals 0
```

convert float to string

```bash
> 1.7 | into string --decimals 1
```

convert float to string and limit to 2 decimals

```bash
> 1.734 | into string --decimals 2
```

convert float to string

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

convert date to string

```bash
> '2020-10-10 10:00:00 +02:00' | into datetime | into string
```

convert filepath to string

```bash
> ls Cargo.toml | get name | into string
```

convert filesize to string

```bash
> 1KiB | into string
```

convert duration to string

```bash
> 9day | into string
```
