# into filesize

**version**: 0.90.2

## **usage**:

Convert value to filesize.

## Signature

`> into filesize ...rest`

## Parameters

- `...rest`: For a data structure input, convert data at the given cell paths.

## Input/output types:

| input            | output           |
| ---------------- | ---------------- |
| filesize         | filesize         |
| int              | filesize         |
| list\<any\>      | list\<filesize\> |
| list\<filesize\> | list\<filesize\> |
| list\<int\>      | list\<filesize\> |
| list\<number\>   | list\<filesize\> |
| list\<string\>   | list\<filesize\> |
| number           | filesize         |
| record           | record           |
| string           | filesize         |
| table            | table            |

## Examples

Convert string to filesize in table

```bash
> [[device size]; ["/dev/sda1" "200"] ["/dev/loop0" "50"]] | into filesize size
```

Convert string to filesize

```bash
> '2' | into filesize
```

Convert float to filesize

```bash
> 8.3 | into filesize
```

Convert int to filesize

```bash
> 5 | into filesize
```

Convert file size to filesize

```bash
> 4KB | into filesize
```
