# into int

**version**: 0.80.0

## **usage**:

Convert value to integer.

## Signature

`> into int ...rest --radix --little-endian`

## Parameters

- `...rest`: for a data structure input, convert data at the given cell paths
- `--radix {number}`: radix of integer
- `--little-endian`: use little-endian byte decoding

## Examples

Convert string to integer in table

```bash
> [[num]; ['-5'] [4] [1.5]] | into int num
```

Convert string to integer

```bash
> '2' | into int
```

Convert decimal to integer

```bash
> 5.9 | into int
```

Convert decimal string to integer

```bash
> '5.9' | into int
```

Convert file size to integer

```bash
> 4KB | into int
```

Convert bool to integer

```bash
> [false, true] | into int
```

Convert date to integer (Unix nanosecond timestamp)

```bash
> 1983-04-13T12:09:14.123456789-05:00 | into int
```

Convert to integer from binary

```bash
> '1101' | into int -r 2
```

Convert to integer from hex

```bash
> 'FF' |  into int -r 16
```

Convert octal string to integer

```bash
> '0o10132' | into int
```

Convert 0 padded string to integer

```bash
> '0010132' | into int
```

Convert 0 padded string to integer with radix

```bash
> '0010132' | into int -r 8
```
