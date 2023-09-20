# into binary

**version**: 0.85.0

## **usage**:

Convert value to a binary primitive.

## Signature

`> into binary ...rest --compact`

## Parameters

- `...rest`: for a data structure input, convert data at the given cell paths
- `--compact`: output without padding zeros

## Input/output types:

| input    | output |
| -------- | ------ |
| binary   | binary |
| bool     | binary |
| datetime | binary |
| filesize | binary |
| int      | binary |
| number   | binary |
| record   | record |
| string   | binary |
| table    | table  |

## Examples

convert string to a nushell binary primitive

```bash
> 'This is a string that is exactly 52 characters long.' | into binary
```

convert a number to a nushell binary primitive

```bash
> 1 | into binary
```

convert a boolean to a nushell binary primitive

```bash
> true | into binary
```

convert a filesize to a nushell binary primitive

```bash
> ls | where name == LICENSE | get size | into binary
```

convert a filepath to a nushell binary primitive

```bash
> ls | where name == LICENSE | get name | path expand | into binary
```

convert a float to a nushell binary primitive

```bash
> 1.234 | into binary
```

convert an integer to a nushell binary primitive with compact enabled

```bash
> 10 | into binary --compact
```
