# into binary

**version**: 0.80.0

## **usage**:

Convert value to a binary primitive.

## Signature

`> into binary ...rest`

## Parameters

- `...rest`: for a data structure input, convert data at the given cell paths

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

convert a decimal to a nushell binary primitive

```bash
> 1.234 | into binary
```
