# touch

**version**: 0.100.1

## **usage**:

Creates one or more files.

## Signature

`> touch ...rest --reference --modified --access --no-create --no-deref`

## Parameters

- `...rest`: The file(s) to create.
- `--reference {string}`: change the file or directory time to the time of the reference file/directory
- `--modified`: change the modification time of the file or directory. If no reference file/directory is given, the current time is used
- `--access`: change the access time of the file or directory. If no reference file/directory is given, the current time is used
- `--no-create`: do not create the file if it does not exist
- `--no-deref`: do not follow symlinks

## Input/output types:

| input   | output  |
| ------- | ------- |
| nothing | nothing |

## Examples

Creates "fixture.json"

```bash
> touch fixture.json
```

Creates files a, b and c

```bash
> touch a b c
```

Changes the last modified time of "fixture.json" to today's date

```bash
> touch -m fixture.json
```

Changes the last modified time of file d and e to "fixture.json"'s last modified time

```bash
> touch -m -r fixture.json d e
```
