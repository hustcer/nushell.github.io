# into int

**version**: 0.100.1

## **usage**:

Convert value to integer.

## Signature

`> into int ...rest --radix --endian --signed`

## Parameters

- `...rest`: For a data structure input, convert data at the given cell paths.
- `--radix {number}`: radix of integer
- `--endian {string}`: byte encode endian, available options: native(default), little, big
- `--signed`: always treat input number as a signed number

## Input/output types:

| input            | output      |
| ---------------- | ----------- |
| binary           | int         |
| bool             | int         |
| datetime         | int         |
| duration         | int         |
| filesize         | int         |
| list\<any\>      | list\<int\> |
| list\<bool\>     | list\<int\> |
| list\<datetime\> | list\<int\> |
| list\<duration\> | list\<int\> |
| list\<filesize\> | list\<int\> |
| list\<number\>   | list\<int\> |
| list\<string\>   | list\<int\> |
| number           | int         |
| record           | record      |
| string           | int         |
| table            | table       |

## Examples

Convert string to int in table

```bash
> [[num]; ['-5'] [4] [1.5]] | into int num
```

Convert string to int

```bash
> '2' | into int
```

Convert float to int

```bash
> 5.9 | into int
```

Convert decimal string to int

```bash
> '5.9' | into int
```

Convert file size to int

```bash
> 4KB | into int
```

Convert bool to int

```bash
> [false, true] | into int
```

Convert date to int (Unix nanosecond timestamp)

```bash
> 1983-04-13T12:09:14.123456789-05:00 | into int
```

Convert to int from binary data (radix: 2)

```bash
> '1101' | into int --radix 2
```

Convert to int from hex

```bash
> 'FF' |  into int --radix 16
```

Convert octal string to int

```bash
> '0o10132' | into int
```

Convert 0 padded string to int

```bash
> '0010132' | into int
```

Convert 0 padded string to int with radix 8

```bash
> '0010132' | into int --radix 8
```

Convert binary value to int

```bash
> 0x[10] | into int
```

Convert binary value to signed int

```bash
> 0x[a0] | into int --signed
```
