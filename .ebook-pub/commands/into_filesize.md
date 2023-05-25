# into filesize

**version**: 0.80.0

## **usage**:

Convert value to filesize.

## Signature

`> into filesize ...rest`

## Parameters

- `...rest`: for a data structure input, convert data at the given cell paths

## Examples

Convert string to filesize in table

```bash
> [[bytes]; ['5'] [3.2] [4] [2kb]] | into filesize bytes
```

Convert string to filesize

```bash
> '2' | into filesize
```

Convert decimal to filesize

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
