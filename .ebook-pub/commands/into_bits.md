# into bits

**version**: 0.90.2

## **usage**:

Convert value to a binary primitive.

## Signature

`> into bits ...rest`

## Parameters

- `...rest`: for a data structure input, convert data at the given cell paths

## Input/output types:

| input    | output |
| -------- | ------ |
| binary   | string |
| bool     | string |
| datetime | string |
| duration | string |
| filesize | string |
| int      | string |
| record   | record |
| string   | string |
| table    | table  |

## Examples

convert a binary value into a string, padded to 8 places with 0s

```bash
> 01b | into bits
```

convert an int into a string, padded to 8 places with 0s

```bash
> 1 | into bits
```

convert a filesize value into a string, padded to 8 places with 0s

```bash
> 1b | into bits
```

convert a duration value into a string, padded to 8 places with 0s

```bash
> 1ns | into bits
```

convert a boolean value into a string, padded to 8 places with 0s

```bash
> true | into bits
```

convert a datetime value into a string, padded to 8 places with 0s

```bash
> 2023-04-17T01:02:03 | into bits
```

convert a string into a raw binary string, padded with 0s to 8 places

```bash
> 'nushell.sh' | into bits
```
