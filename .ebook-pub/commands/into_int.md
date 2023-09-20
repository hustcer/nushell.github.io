# into int

**version**: 0.85.0

## **usage**:

Convert value to integer.

## Signature

`> into int ...rest --radix --endian`

## Parameters

- `...rest`: for a data structure input, convert data at the given cell paths
- `--radix {number}`: radix of integer
- `--endian {string}`: byte encode endian, available options: native(default), little, big

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

Convert string to integer in table

```bash
> [[num]; ['-5'] [4] [1.5]] | into int num
```

Convert string to integer

```bash
> '2' | into int
```

Convert float to integer

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
